import express from 'express';
import { applyForAffiliate, getAffiliateDashboard, updatePaymentMethod, getAllTransactions } from '../controllers/affiliateController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/apply', authMiddleware, applyForAffiliate);
router.get('/dashboard', authMiddleware, getAffiliateDashboard);
router.put('/payment-method', authMiddleware, updatePaymentMethod);
router.get('/transactions', authMiddleware, getAllTransactions);

export default router;
