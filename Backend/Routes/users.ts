import { createUsers, readUsers } from "../Controllers/Users";
import express from "express";

const UserRouter = express.Router();

UserRouter.route('/users').get(readUsers).post(createUsers);
export default UserRouter;
