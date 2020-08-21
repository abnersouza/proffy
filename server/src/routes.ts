import express from "express";
import ClassesController from "./controllers/classes-controller";
import ConnectionsController from "./controllers/connections-controller";

const routes = express.Router();
const classControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();

routes.get("/classes", classControllers.index);
routes.post("/classes", classControllers.create);

routes.get("/connections", connectionsControllers.index);
routes.post("/connections", connectionsControllers.create);

export default routes;
