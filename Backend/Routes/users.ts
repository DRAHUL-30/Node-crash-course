import { createUsers, readUsers, updateUsers } from "../Controllers/Users";
import express from "express";

const UserRouter = express.Router();

UserRouter.route('/users').get(readUsers).post(createUsers).put(updateUsers);
export default UserRouter;
