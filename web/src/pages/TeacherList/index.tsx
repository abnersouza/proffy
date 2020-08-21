import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import ClassItem, { ClassInfo } from "../../components/ClassItem";

import api from "../../services/api";

import "./styles.css";

function TeacherList() {
  const [classes, setClasses] = useState([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();
    console.log({ subject, week_day, time });
    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setClasses(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Those are the available Proffys">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            id="subject"
            label="Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { label: "Arts", value: "arts" },
              { label: "Biology", value: "biology" },
              { label: "Sciences", value: "sciences" },
              { label: "Physics", value: "physics" },
              { label: "History", value: "history" },
              { label: "Geography", value: "geography" },
              { label: "Mathematics", value: "mathematics" },
              { label: "English", value: "english" },
              { label: "Chemistry", value: "chemistry" },
            ]}
          />
          <Select
            id="week_day"
            label="Days of the Week"
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: "0", label: "Sunday" },
              { value: "1", label: "Monday" },
              { value: "2", label: "Tuesday" },
              { value: "3", label: "Wednesday" },
              { value: "4", label: "Thursday" },
              { value: "5", label: "Friday" },
              { value: "6", label: "Saturday" },
            ]}
          />
          <Input
            id="time"
            label="Time"
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <button type="submit">Find</button>
        </form>
      </PageHeader>

      <main>
        {classes.map((c: ClassInfo) => {
          return <ClassItem key={c.id} classInfo={c} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
