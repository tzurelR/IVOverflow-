import express from 'express';
import connectDB from './config/dbConfig';
import dotenv from 'dotenv';
import userRoutes from './api/routes/userRoute';
import questionRoutes from './api/routes/questionRoute';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json());

app.use('/user', userRoutes);
app.use('/question', questionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});