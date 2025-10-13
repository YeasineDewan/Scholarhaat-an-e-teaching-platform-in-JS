import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './models/index.js';
import authRoutes from './routes/auth.js';
import statsRoutes from './routes/stats.js';
import jobsRoutes from './routes/jobs.js';
import tutorsRoutes from './routes/tutors.js';
import categoriesRoutes from './routes/categories.js';
import affiliateRoutes from './routes/affiliate.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/tutors', tutorsRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/affiliate', affiliateRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Tuition Terminal API is running');
});

// Database connection and server start
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    // Sync database models (in development)
    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true });
      console.log('Database models synchronized');
    }
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
