import { IQuestion } from "../../interfaces";

const createQuestion = (question: IQuestion) => {
    const res = question.save();
    return res;
}

export {createQuestion};