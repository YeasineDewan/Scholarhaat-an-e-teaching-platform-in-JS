import jwt from 'jsonwebtoken';
import models from '../models/index.js';
import { Op } from 'sequelize';
import crypto from 'crypto';

// Register new user
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, role, university, languagePreference } = req.body;
    
    // Check if user already exists
    const existingUser = await models.User.findOne({ 
      where: { 
        [Op.or]: [
          { email },
          { phone }
        ]
      } 
    });
    
    if (existingUser) {
      return res.status(400).json({ 
        message: existingUser.email === email ? 'User already exists with this email' : 'User already exists with this phone number' 
      });
    }
    
    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ 
        message: 'Password must be at least 8 characters long and include uppercase, lowercase, number and special character' 
      });
    }
    
    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    
    // Create user
    const user = await models.User.create({
      firstName,
      lastName,
      email,
      phone,
      password,
      role,
      languagePreference: languagePreference || 'en',
      verificationToken
    });
    
    // Create profile based on role
    if (role === 'tutor') {
      await models.Tutor.create({
        userId: user.id,
        university,
        joinedAt: new Date(),
        languagePreference: languagePreference || 'en'
      });
    } else if (role === 'student' || role === 'parent') {
      await models.Student.create({
        userId: user.id,
        joinedAt: new Date()
      });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    );
    
    // TODO: Send verification email
    
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        languagePreference: user.languagePreference
      }
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await models.User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Update last login
    user.lastLogin = new Date();
    await user.save();
    
    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    );
    
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get current user
export const getCurrentUser = async (req, res) => {
  try {
    const user = await models.User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] }
    });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Verify email
export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    
    const user = await models.User.findOne({ where: { verificationToken: token } });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid verification token' });
    }
    
    // Update user
    user.isEmailVerified = true;
    user.verificationToken = null;
    await user.save();
    
    res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Forgot password
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    
    const user = await models.User.findOne({ where: { email } });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    
    // Set token expiry (1 hour)
    const resetExpiry = new Date();
    resetExpiry.setHours(resetExpiry.getHours() + 1);
    
    // Update user
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetExpiry;
    await user.save();
    
    // TODO: Send password reset email
    
    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error('Error requesting password reset:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Reset password
export const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    
    const user = await models.User.findOne({ 
      where: { 
        resetPasswordToken: token,
        resetPasswordExpires: { [Op.gt]: new Date() }
      } 
    });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired reset token' });
    }
    
    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ 
        message: 'Password must be at least 8 characters long and include uppercase, lowercase, number and special character' 
      });
    }
    
    // Update user
    user.password = password; // Will be hashed by the model hook
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    await user.save();
    
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Change language preference
export const changeLanguage = async (req, res) => {
  try {
    const { languagePreference } = req.body;
    
    // Validate language preference
    if (!['en', 'bn', 'both'].includes(languagePreference)) {
      return res.status(400).json({ message: 'Invalid language preference' });
    }
    
    const user = await models.User.findByPk(req.user.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Update user
    user.languagePreference = languagePreference;
    await user.save();
    
    // Update tutor or student if exists
    if (user.role === 'tutor') {
      const tutor = await models.Tutor.findOne({ where: { userId: user.id } });
      if (tutor) {
        tutor.languagePreference = languagePreference;
        await tutor.save();
      }
    }
    
    res.status(200).json({ 
      message: 'Language preference updated successfully',
      languagePreference
    });
  } catch (error) {
    console.error('Error changing language preference:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
