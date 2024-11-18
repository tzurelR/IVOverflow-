import { Document } from "mongoose";

export interface IUser extends Document {
    nickname: string;
    fullName: string;
    email: string;
    password: string;
};

export interface IQuestion extends Document {
    title: string;
    content: string;
    tags: string[];
    authorNickname: string;
    createdAt: Date;
}