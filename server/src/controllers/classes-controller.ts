import { Request, Response } from "express";
import db from "../database/connections";
import convertHoursToMinutes from "../utils/convert-hours-to-minutes";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(req: Request, res: Response) {
    const { week_day, subject, time } = req.query;

    if (!week_day || !subject || !time) {
      return res.status(400).json({
        error: "Missing filters to search classes",
      });
    }

    const timeInMinutes = convertHoursToMinutes(<string>time);

    const classes = await db("classes")
      .whereExists(function () {
        this.select("class_schedules.*")
          .from("class_schedules")
          .whereRaw("`class_schedules`.`class_id` = `classes`.`id`")
          .whereRaw("`class_schedules`.`week_day` = ??", [Number(week_day)])
          .whereRaw("`class_schedules`.`from` <= ??", [timeInMinutes])
          .whereRaw("`class_schedules`.`to` > ??", [timeInMinutes]);
      })
      .where("classes.subject", "=", <string>subject)
      .join("users", "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*"]);

    return res.json(classes);
  }

  async create(req: Request, res: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

    const trx = await db.transaction();

    try {
      // Insert a user
      const insertedUsersIds = await trx("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      // Because there is only one user inserted we get the first position of the array
      const user_id = insertedUsersIds[0];

      // Insert a class
      const insertedClassesIds = await trx("classes").insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          from: convertHoursToMinutes(scheduleItem.from),
          to: convertHoursToMinutes(scheduleItem.to),
          week_day: scheduleItem.week_day,
        };
      });

      await trx("class_schedules").insert(classSchedule);

      await trx.commit();

      return res.status(201).json({ message: "Created successfully" });
    } catch (error) {
      await trx.rollback();
      console.error(error);
      return res.status(400).json({
        error: "Unexpected error while creating new class",
      });
    }
  }
}
