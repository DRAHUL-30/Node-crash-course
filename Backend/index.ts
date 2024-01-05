import type { Application, NextFunction, Request, Response } from "express";
import { Connection } from "./Configs/Connection";
import { MainRouter } from "./Routes/router";
const morgan = require("morgan");

const express = require("express");
const app: Application = express();
const cors = require("cors");
const MorganLogs = require("morgan");

Connection();

const Port = 8080;
app.use(express.json());
app.use(cors());

// Use a custom log format
app.use(MorganLogs("dev"));

app.use("/", MainRouter);

app.listen(Port, () => {
    console.log("Server running at ",Port);
})
