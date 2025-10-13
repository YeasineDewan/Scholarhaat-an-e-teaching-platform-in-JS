import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Database connection
export const sequelize = new Sequelize(
  process.env.DB_NAME || 'tuition_terminal',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Import models
import User from './user.js';
import Tutor from './tutor.js';
import Student from './student.js';
import Job from './job.js';
import Category from './category.js';
import Testimonial from './testimonial.js';
import Affiliate from './affiliate.js';
import AffiliateTransaction from './affiliateTransaction.js';

// Initialize models
const models = {
  User: User(sequelize),
  Tutor: Tutor(sequelize),
  Student: Student(sequelize),
  Job: Job(sequelize),
  Category: Category(sequelize),
  Testimonial: Testimonial(sequelize),
  Affiliate: Affiliate(sequelize),
  AffiliateTransaction: AffiliateTransaction(sequelize)
};

// Define associations
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export default models;
