import { match } from "assert";
import mongoose, {Schema, Document, model} from "mongoose";

interface IUser extends Document {
    nickname: string;
    fullName: string;
    email: string;
    password: string;
};

const userSchema: Schema = new Schema<IUser> ({
    nickname: {type: String, required: true, unique: true},
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address']
    },
    password: {type: String, required: true},
});

const User = model<IUser>('User', userSchema);
export default User;