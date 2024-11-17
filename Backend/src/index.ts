import express from 'express';
import connectDB from './config/dbConfig';
import dotenv from 'dotenv';
import * as userController from './api/controllers/userController'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json());

app.use('/user', userController.createUserController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});