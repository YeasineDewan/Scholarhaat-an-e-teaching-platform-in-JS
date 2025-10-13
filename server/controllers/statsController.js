import models from '../models/index.js';

// Get all statistics
export const getStats = async (req, res) => {
  try {
    // Count tutors
    const tutorCount = await models.Tutor.count({
      where: { isActive: true }
    });
    
    // Count students
    const studentCount = await models.Student.count({
      where: { isActive: true }
    });
    
    // Count jobs
    const jobCount = await models.Job.count();
    
    // Count male tutors
    const maleTutorCount = await models.Tutor.count({
      where: { gender: 'male', isActive: true }
    });
    
    // Count female tutors
    const femaleTutorCount = await models.Tutor.count({
      where: { gender: 'female', isActive: true }
    });
    
    // Calculate success rate (completed jobs / total jobs)
    const completedJobCount = await models.Job.count({
      where: { status: 'completed' }
    });
    
    const successRate = jobCount > 0 
      ? Math.round((completedJobCount / jobCount) * 100) 
      : 98; // Default value if no jobs
    
    res.status(200).json({
      tutorCount,
      studentCount,
      jobCount,
      maleTutorCount,
      femaleTutorCount,
      successRate
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
