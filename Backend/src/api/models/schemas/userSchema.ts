import {Schema, model} from "mongoose";
import { IUser, IQuestion } from "../../../interfaces";

const userSchema: Schema = new Schema<IUser> ({
    nickname: {type: String, required: true, unique: true},
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address']
    },
    password: {type: String, required: true},
});

const questionSchema: Schema = new Schema<IQuestion> ({
    title: {type: String, required: true},
    content: {type: String, required: true},
    tags: {type: [String], required: true},
    authorNickname: {type: String, required: true},
    createdAt: {type: Date, required: true, default: Date.now},

})

const User = model<IUser>('User', userSchema);
const Question = model<IQuestion>('Question', questionSchema);
export {User, Question};
