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

const loginUserController = async(req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body;
        if(!email || !password) res.status(400).json({message: 'Email and password are required'});

        const token = await userService.loginUserService(email, password);
        if(token) {
            res.status(200).json({message: 'Login successful', token});
        } else {
            res.status(401).json({message: 'Invalid email or password'});
        }
    } catch(err) {
        res.status(500).json({message: 'Error during login'})
    }
}

export {createUserController, loginUserController};