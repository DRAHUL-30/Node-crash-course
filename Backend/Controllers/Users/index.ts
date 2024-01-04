import { Request, Response } from 'express';
import { InsertData } from '../../DB-Controller/postgres/dbOperations';
import { userCreation, readUserData } from './utility';

export const readUsers = async (req: Request, res: Response) => {
    try {
        const readUserResponse = await readUserData();
        if (readUserResponse) {
            res.status(200).json({ message: 'User data is here', user: readUserResponse });
        } else {
            res.status(404).json({ message: 'No user data found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Define the createUsers function
export const createUsers = async (req: Request, res: Response) => {
    try {
        const { ...rest } = req.body;
        console.log(req.body, "body_data");
        const userCreatedResponse = await userCreation({ ...rest });
        // Handle the userCreatedResponse or send a response to the client
        res.status(200).json({ message: 'User created successfully', user: userCreatedResponse });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
