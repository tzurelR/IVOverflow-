import { IQuestion } from "../../interfaces";
import Question from "../models/schemas/questionSchema";
import * as questionModel from '../models/questionModel';

const createQuestionService = (question: IQuestion) => {
    const questionToSave = new Question(question);
    return questionModel.createQuestion(questionToSave);
}

export {createQuestionService};