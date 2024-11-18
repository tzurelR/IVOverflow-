import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IUser } from '../../interfaces';
import {User} from '../models/schemas/userSchema';
import * as userModel from '../models/userModel';

const hashPassword = (password: string): Promise<String> => {
    return bcrypt.hash(password, 10);
}

const equalPasswords = async(password: string, hashedPasswored: string): Promise<boolean> => {
    const result = await bcrypt.compare(password, hashedPasswored);
    return result;
}

const createUserService = async(user: IUser): Promise<IUser> => {
    let {nickname, fullName, email, password} = user;
    const userExists = await User.findOne({ email });
    if(userExists) throw new Error('User with this email already exists');

    const hashedPassword = await hashPassword(password);
    const newUser = new User({ nickname, fullName, email, password: String(hashedPassword) });

    return userModel.createUser(newUser);    
}

const loginUserService = async(email: string, password: string) => {
    const user = await User.findOne({email});
    if(!user) return null;

    const isPasswordValid = await equalPasswords(password, user.password)
    if(!isPasswordValid) {
        return null;
    }

    const token = jwt.sign(
        {id: user._id, email: user.email },
        process.env.JWT_SECRET as string, 
        {expiresIn: process.env.JWT_EXPIRES_IN}
    )
    return token;
}

export {createUserService, loginUserService};

