import { Application } from "express";
import UserRouter from "./users";

const express = require("express");
const MainRouter: Application = express();

MainRouter.use("/users", UserRouter);