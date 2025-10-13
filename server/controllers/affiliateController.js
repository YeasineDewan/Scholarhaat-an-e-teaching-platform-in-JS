import models from '../models/index.js';
import { v4 as uuidv4 } from 'uuid';

// Apply for affiliate program
export const applyForAffiliate = async (req, res) => {
  try {
    const { promotionMethod } = req.body;
    const userId = req.user.id;
    
    // Check if user already has an affiliate account
    const existingAffiliate = await models.Affiliate.findOne({ where: { userId } });
    
    if (existingAffiliate) {
      return res.status(400).json({ message: 'You already have an affiliate account' });
    }
    
    // Generate unique referral code
    const referralCode = uuidv4().substring(0, 8);
    
    // Create affiliate
    const affiliate = await models.Affiliate.create({
      userId,
      referralCode,
      promotionMethod
    });
    
    res.status(201).json({
      message: 'Affiliate application submitted successfully',
      affiliate: {
        id: affiliate.id,
        referralCode: affiliate.referralCode,
        totalEarnings: affiliate.totalEarnings,
        pendingEarnings: affiliate.pendingEarnings,
        paidEarnings: affiliate.paidEarnings
      }
    });
  } catch (error) {
    console.error('Error applying for affiliate program:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get affiliate dashboard
export const getAffiliateDashboard = async (req, res) => {
  try {
    const userId = req.user.id;
    
    // Find affiliate
    const affiliate = await models.Affiliate.findOne({ where: { userId } });
    
    if (!affiliate) {
      return res.status(404).json({ message: 'Affiliate account not found' });
    }
    
    // Get transactions
    const transactions = await models.AffiliateTransaction.findAll({
      where: { affiliateId: affiliate.id },
      order: [['createdAt', 'DESC']],
      limit: 10
    });
    
    // Format transactions
    const formattedTransactions = transactions.map(transaction => ({
      id: transaction.id,
      type: transaction.transactionType,
      amount: parseFloat(transaction.amount),
      status: transaction.status,
      description: transaction.description,
      date: new Date(transaction.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }));
    
    res.status(200).json({
      affiliate: {
        id: affiliate.id,
        referralCode: affiliate.referralCode,
        totalEarnings: parseFloat(affiliate.totalEarnings),
        pendingEarnings: parseFloat(affiliate.pendingEarnings),
        paidEarnings: parseFloat(affiliate.paidEarnings),
        tutorReferrals: affiliate.tutorReferrals,
        studentReferrals: affiliate.studentReferrals,
        completedLessons: affiliate.completedLessons,
        paymentMethod: affiliate.paymentMethod,
        paymentDetails: affiliate.paymentDetails,
        isActive: affiliate.isActive
      },
      transactions: formattedTransactions,
      referralLink: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/register?ref=${affiliate.referralCode}`
    });
  } catch (error) {
    console.error('Error fetching affiliate dashboard:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update payment method
export const updatePaymentMethod = async (req, res) => {
  try {
    const { paymentMethod, paymentDetails } = req.body;
    const userId = req.user.id;
    
    // Find affiliate
    const affiliate = await models.Affiliate.findOne({ where: { userId } });
    
    if (!affiliate) {
      return res.status(404).json({ message: 'Affiliate account not found' });
    }
    
    // Update affiliate
    affiliate.paymentMethod = paymentMethod;
    affiliate.paymentDetails = paymentDetails;
    await affiliate.save();
    
    res.status(200).json({
      message: 'Payment method updated successfully',
      paymentMethod,
      paymentDetails
    });
  } catch (error) {
    console.error('Error updating payment method:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all transactions
export const getAllTransactions = async (req, res) => {
  try {
    const userId = req.user.id;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    
    // Find affiliate
    const affiliate = await models.Affiliate.findOne({ where: { userId } });
    
    if (!affiliate) {
      return res.status(404).json({ message: 'Affiliate account not found' });
    }
    
    // Get transactions with pagination
    const { count, rows } = await models.AffiliateTransaction.findAndCountAll({
      where: { affiliateId: affiliate.id },
      order: [['createdAt', 'DESC']],
      limit,
      offset
    });
    
    // Format transactions
    const formattedTransactions = rows.map(transaction => ({
      id: transaction.id,
      type: transaction.transactionType,
      amount: parseFloat(transaction.amount),
      status: transaction.status,
      description: transaction.description,
      date: new Date(transaction.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }));
    
    const totalPages = Math.ceil(count / limit);
    
    res.status(200).json({
      transactions: formattedTransactions,
      currentPage: page,
      totalPages,
      totalTransactions: count
    });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
