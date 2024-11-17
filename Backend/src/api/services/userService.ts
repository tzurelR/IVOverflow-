import bcrypt from 'bcryptjs';
import { IUser } from '../../interfaces';
import User from '../models/userSchema';
import * as userModel from '../models/userModel';

const hashPassword = (password: string): Promise<String> => {
    return bcrypt.hash(password, 10);
}

const createUserService = async(user: IUser): Promise<IUser> => {
    let {nickname, fullName, email, password} = user;
    const userExists = await User.findOne({ email });
    if(userExists) throw new Error('User with this email already exists');

    const hashedPassword = hashPassword(password);
    const newUser = new User({ nickname, fullName, email, password: String(hashedPassword) });
    
    return userModel.createUser(newUser);    
}

export {createUserService};

