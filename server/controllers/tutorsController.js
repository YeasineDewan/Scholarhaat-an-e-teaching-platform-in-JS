import models from '../models/index.js';
import { Op } from 'sequelize';

// Get tutors by category
export const getTutorsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    
    // Build where clause based on category
    let whereClause = { isActive: true };
    
    if (category !== 'all') {
      if (category === 'verified') {
        whereClause.isVerified = true;
      } else if (category === 'premium') {
        whereClause.isPremium = true;
      } else if (category === 'exclusive') {
        whereClause.isExclusive = true;
      } else if (category === 'new') {
        // Get tutors joined in the last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        whereClause.joinedAt = {
          [Op.gte]: thirtyDaysAgo
        };
      }
    }
    
    // Get tutors
    const tutors = await models.Tutor.findAll({
      where: whereClause,
      include: [
        {
          model: models.User,
          attributes: ['firstName', 'lastName', 'email']
        }
      ],
      limit: 100
    });
    
    // Format tutors for response
    const formattedTutors = tutors.map(tutor => ({
      id: tutor.id,
      name: `${tutor.User.firstName} ${tutor.User.lastName}`,
      university: tutor.university || 'Not specified',
      location: tutor.location || 'Not specified',
      image: tutor.profileImage || `https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor${tutor.id}`,
      badges: [
        ...(tutor.isVerified ? ['verified'] : []),
        ...(tutor.isPremium ? ['premium'] : []),
        ...(tutor.isExclusive ? ['exclusive'] : [])
      ]
    }));
    
    // Group tutors by categories for the UI
    const sections = [
      {
        title: "All Tutors",
        tutors: formattedTutors.slice(0, 4)
      },
      {
        title: "Exclusive Tutors",
        tutors: formattedTutors.filter(t => t.badges.includes('exclusive')).slice(0, 4)
      },
      {
        title: "Premium Tutors",
        tutors: formattedTutors.filter(t => t.badges.includes('premium')).slice(0, 4)
      },
      {
        title: "Verified Tutors",
        tutors: formattedTutors.filter(t => t.badges.includes('verified')).slice(0, 4)
      },
      {
        title: "New Tutors",
        tutors: formattedTutors.slice(-4)
      }
    ];
    
    res.status(200).json({ sections });
  } catch (error) {
    console.error('Error fetching tutors:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get tutor by ID
export const getTutorById = async (req, res) => {
  try {
    const tutor = await models.Tutor.findByPk(req.params.id, {
      include: [
        {
          model: models.User,
          attributes: ['firstName', 'lastName', 'email', 'phone', 'isActive', 'lastLogin', 'languagePreference']
        },
        {
          model: models.Testimonial,
          where: { isApproved: true },
          required: false
        }
      ]
    });
    
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }
    
    // Format tutor details for response
    const formattedTutor = {
      id: tutor.id,
      name: `${tutor.User.firstName} ${tutor.User.lastName}`,
      profileImage: tutor.profileImage || `https://img.heroui.chat/image/avatar?w=150&h=150&u=tutor${tutor.id}`,
      university: tutor.university || 'Not specified',
      rating: parseFloat(tutor.rating || 0),
      totalReviews: tutor.Testimonials?.length || 0,
      about: tutor.about || 'No information provided',
      experience: tutor.tutoringExperience || 'No experience information provided',
      livingCountry: tutor.location?.split(',').pop()?.trim() || 'Bangladesh',
      livingCity: tutor.location?.split(',').shift()?.trim() || 'Dhaka',
      preferredLocations: tutor.preferredLocations || ['Home', 'Online', 'Institution'],
      preferredCategories: tutor.preferredCategories || ['Academic', 'Language'],
      preferredSubjects: tutor.preferredSubjects || ['Mathematics', 'English', 'Science'],
      preferredLevels: tutor.preferredLevels || ['Class 1', 'Class 2', 'Class 3'],
      preferredMethods: tutor.preferredMethods || ['Home Tutoring', 'Online Tutoring'],
      availabilityDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
      availableFrom: '4:00 PM',
      availableTo: '8:00 PM',
      tutoringExperience: tutor.tutoringExperience || '2 Years',
      expertiseLevel: tutor.expertiseLevel || 'Intermediate',
      education: tutor.education || [
        {
          degree: 'BSc in Computer Science',
          institution: 'University of Dhaka',
          year: '2018-2022',
          major: 'Computer Science',
          cgpa: '3.8/4.0'
        }
      ],
      certifications: tutor.certifications || [
        {
          name: 'Teaching Certification',
          institution: 'Bangladesh Education Board',
          year: '2022',
          description: 'Certified for secondary level teaching',
          score: 'A+'
        }
      ],
      personalInfo: tutor.personalInfo || {
        gender: 'Male',
        bloodGroup: 'B+',
        religion: 'Islam',
        nationality: 'Bangladeshi',
        dateOfBirth: '10 Oct, 1998',
        memberSince: '05 Mar, 2023',
        lastActive: '10 Oct, 2023',
        presentAddress: 'House 5, Block A, Bashundhara Residential Area, Dhaka',
        permanentAddress: 'House 5, Block A, Bashundhara Residential Area, Dhaka'
      },
      platformStatus: tutor.platformStatus || {
        completedJobs: 42,
        activeJobs: 3,
        ratings: 5,
        reviews: 3,
        successRate: 98
      },
      availableBatches: tutor.availableBatches || [
        {
          title: 'English',
          subject: 'English Grammar',
          schedule: 'Sat, Mon, Wed (4:00 PM)',
          fee: '1500 BDT/month'
        },
        {
          title: 'English',
          subject: 'English Speaking',
          schedule: 'Sun, Tue, Thu (5:00 PM)',
          fee: '1800 BDT/month'
        },
        {
          title: 'English',
          subject: 'English Writing',
          schedule: 'Fri, Sat (10:00 AM)',
          fee: '1200 BDT/month'
        },
        {
          title: 'English',
          subject: 'IELTS Preparation',
          schedule: 'Mon, Wed, Fri (7:00 PM)',
          fee: '2500 BDT/month'
        }
      ],
      relatedTutors: [
        {
          id: '1',
          name: 'Abdul Halim',
          image: `https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor1`,
          university: 'East West University',
          location: 'Dhaka',
          rating: 4.8
        },
        {
          id: '2',
          name: 'Sakib Hasan',
          image: `https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor2`,
          university: 'University of Dhaka',
          location: 'Dhaka',
          rating: 4.9
        },
        {
          id: '3',
          name: 'Yousuf',
          image: `https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor3`,
          university: 'University of Dhaka',
          location: 'Dhaka',
          rating: 4.7
        },
        {
          id: '4',
          name: 'Md Emdad',
          image: `https://img.heroui.chat/image/avatar?w=100&h=100&u=tutor4`,
          university: 'University of Dhaka',
          location: 'Dhaka',
          rating: 4.6
        }
      ],
      reviews: tutor.Testimonials?.map(testimonial => ({
        id: testimonial.id,
        user: testimonial.type === 'student' ? 'Student' : 'Parent',
        rating: testimonial.rating,
        comment: testimonial.content,
        date: new Date(testimonial.createdAt).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        })
      })) || []
    };
    
    res.status(200).json(formattedTutor);
  } catch (error) {
    console.error('Error fetching tutor:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
