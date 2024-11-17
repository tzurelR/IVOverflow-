import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

router.post('/register', userController.createUserController);
router.post('/login', userController.loginUserController);

export default router;