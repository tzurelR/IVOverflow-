import express from 'express';
import connectDB from './config/dbConfig';

const app = express();
const port = 3000;
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});