import express from 'express';
import { register, login, getCurrentUser, verifyEmail, forgotPassword, resetPassword, changeLanguage } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getCurrentUser);
router.get('/verify/:token', verifyEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/change-language', authMiddleware, changeLanguage);

export default router;
