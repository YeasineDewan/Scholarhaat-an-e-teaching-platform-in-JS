import models from '../models/index.js';
import { Op } from 'sequelize';

// Get all jobs with pagination and filters
export const getJobs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const offset = (page - 1) * limit;
    
    // Build filter conditions
    const whereClause = {};
    
    // Apply location filter
    if (req.query.location) {
      whereClause.location = {
        [Op.like]: `%${req.query.location}%`
      };
    }
    
    // Apply subject filter
    if (req.query.subject) {
      whereClause.subjects = {
        [Op.like]: `%${req.query.subject}%`
      };
    }
    
    // Apply tutoring mode filter
    if (req.query.tutorMode) {
      whereClause.tutorMode = req.query.tutorMode;
    }
    
    // Get jobs with pagination
    const { count, rows } = await models.Job.findAndCountAll({
      where: whereClause,
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    });
    
    // Format jobs for response
    const jobs = rows.map(job => {
      const createdAt = new Date(job.createdAt);
      const now = new Date();
      const diffInMinutes = Math.floor((now - createdAt) / (1000 * 60));
      
      let postedAgo;
      if (diffInMinutes < 60) {
        postedAgo = `${diffInMinutes} minutes ago`;
      } else if (diffInMinutes < 1440) {
        postedAgo = `${Math.floor(diffInMinutes / 60)} hours ago`;
      } else {
        postedAgo = `${Math.floor(diffInMinutes / 1440)} days ago`;
      }
      
      return {
        id: job.jobId,
        class: job.className,
        location: job.location,
        date: new Date(job.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }),
        subjects: job.subjects,
        feePerWeek: `${job.feePerWeek} BDT`,
        tutorGender: job.tutorGender.charAt(0).toUpperCase() + job.tutorGender.slice(1),
        tutorMode: job.tutorMode === 'home' ? 'Home Tutoring' : job.tutorMode === 'online' ? 'Online Tutoring' : 'Both',
        tutorTime: job.tutorTime,
        postedAgo
      };
    });
    
    const totalPages = Math.ceil(count / limit);
    
    res.status(200).json({
      jobs,
      currentPage: page,
      totalPages,
      totalJobs: count
    });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get job by ID
export const getJobById = async (req, res) => {
  try {
    const job = await models.Job.findOne({
      where: { jobId: req.params.id }
    });
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    
    res.status(200).json(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Create new job
export const createJob = async (req, res) => {
  try {
    // Generate unique job ID
    const jobId = `JOB-ID-${Math.floor(10000 + Math.random() * 90000)}`;
    
    const job = await models.Job.create({
      ...req.body,
      jobId
    });
    
    res.status(201).json(job);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
