import { IUser } from "../../interfaces";

const createUser = async(user: IUser): Promise<IUser> => {
    const res = await user.save();
    return res;
}

export {createUser};