import { insertData, readData, updateData } from "../../DB-Controller/postgres/dbOperations";
import User from "../../Models/user";

interface userCreationProps{
    id?: number,
    firstName: string;
    lastName: string;
    email: string;
    // [key: string]: any;
}

export const readUserData = async () => {
    try {
        const getUserDetails = await readData(User);
        return getUserDetails;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const userCreation = async (userData: userCreationProps): Promise<User | null> => {
    try {
        const userInsertedData = await insertData(userData, User);
        return userInsertedData; // or handle the response accordingly
    } catch (error) {
        console.error('Error creating user:', error);
        return null; // or handle the error response accordingly
    }
}

export const userUpdation = async (userData: userCreationProps): Promise<User | null> => {
    try {
        const userUpdatedData = await updateData(userData, User, {id: userData?.id});
        return userUpdatedData;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
