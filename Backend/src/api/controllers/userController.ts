import { Request, Response } from "express";
import * as userService from "../services/userService";

const createUserController = async(req: Request, res: Response): Promise<void> => {
    try {
        const userDetails = req.body;
        const user = await userService.createUserService(userDetails);
        res.status(201).json({message: 'User registered successfully', user});
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        } else {
            res.status(400).json({ message: 'An unknown error occurred in create new user' });
        }
    }
}

export {createUserController};