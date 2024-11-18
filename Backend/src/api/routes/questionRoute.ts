import express from 'express';
import veriftToken from '../middleware/authMiddleware';
import * as questionController from '../controllers/questionController';
const router = express.Router();

router.post('/createQuestion', veriftToken, questionController.createQuestionController);

export default router;
