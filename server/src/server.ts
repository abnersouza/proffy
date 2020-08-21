import express from "express";
import cors from "cors";
import routes from "./routes";

// Route Params - req.params
// Query Params - req.query

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
