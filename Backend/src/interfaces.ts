import { Document } from "mongoose";

export interface IUser extends Document {
    nickname: string;
    fullName: string;
    email: string;
    password: string;
};