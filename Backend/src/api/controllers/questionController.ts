import { Request, Response } from "express";
import * as questionService from '../services/questionService';

const createQuestionController = (req: Request, res: Response) => {
    try {
        const questionDetails = req.body;
        const question = questionService.createQuestionService(questionDetails);
        res.status(201).json({message: 'question created successfully', question});
    } catch(err) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        } else {
            res.status(400).json({ message: 'An unknown error occurred in create question' });
        }
    }
}

export {createQuestionController};