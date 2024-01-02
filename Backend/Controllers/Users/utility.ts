import { InsertData } from "../../DB-Controller/postgres/dbOperations";
import User from "../../Models/user";

interface userCreationProps{
    firstName: string,
    lastName: string,
    email: string
}

export const userCreation = async (userData: userCreationProps): Promise<boolean> => {
    const userInsertedData = await InsertData(User)
}