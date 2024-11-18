import {Schema, model} from "mongoose";
import { IQuestion } from "../../../interfaces";

const questionSchema: Schema = new Schema<IQuestion> ({
    title: {type: String, required: true},
    content: {type: String, required: true},
    tags: {type: [String], required: true},
    authorNickname: {type: String, required: true},
    createdAt: {type: Date, required: true, default: Date.now},

})

const Question = model<IQuestion>('Question', questionSchema);
export default Question;