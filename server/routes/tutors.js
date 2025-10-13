import express from 'express';
import { getTutorsByCategory, getTutorById } from '../controllers/tutorsController.js';

const router = express.Router();

router.get('/:category', getTutorsByCategory);
router.get('/detail/:id', getTutorById);

export default router;
