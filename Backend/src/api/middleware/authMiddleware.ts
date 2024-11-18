import { Request, Response, NextFunction } from "express";
import jwt, {JwtPayload} from "jsonwebtoken";

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

const veriftToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.split(' ')[1];

        if(!token) {
            throw new Error();
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET || '');
        (req as CustomRequest).token = decode;
        next();
    } catch (err) {
        res.status(401).json({message: 'Please authenticate!'})
    }
}

export default veriftToken;