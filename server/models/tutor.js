import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Tutor = sequelize.define('Tutor', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    university: {
      type: DataTypes.STRING,
      allowNull: true
    },
    degree: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subjects: {
      type: DataTypes.JSON, // Array of subjects
      allowNull: true
    },
    experience: {
      type: DataTypes.INTEGER, // Years of experience
      allowNull: true
    },
    hourlyRate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isPremium: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isExclusive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: true
    },
    gender: {
      type: DataTypes.ENUM('male', 'female', 'other'),
      allowNull: true
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coverImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    education: {
      type: DataTypes.JSON, // Array of education details
      allowNull: true
    },
    certifications: {
      type: DataTypes.JSON, // Array of certification details
      allowNull: true
    },
    preferredLocations: {
      type: DataTypes.JSON, // Array of preferred locations
      allowNull: true
    },
    preferredCategories: {
      type: DataTypes.JSON, // Array of preferred categories
      allowNull: true
    },
    preferredSubjects: {
      type: DataTypes.JSON, // Array of preferred subjects
      allowNull: true
    },
    preferredLevels: {
      type: DataTypes.JSON, // Array of preferred levels
      allowNull: true
    },
    preferredMethods: {
      type: DataTypes.JSON, // Array of preferred methods
      allowNull: true
    },
    availableBatches: {
      type: DataTypes.JSON, // Array of available batches
      allowNull: true
    },
    personalInfo: {
      type: DataTypes.JSON, // Personal information
      allowNull: true
    },
    platformStatus: {
      type: DataTypes.JSON, // Platform status
      allowNull: true
    },
    languagePreference: {
      type: DataTypes.ENUM('en', 'bn', 'both'),
      defaultValue: 'en'
    },
    availableDays: {
      type: DataTypes.JSON, // Array of days
      allowNull: true
    },
    availableTimeSlots: {
      type: DataTypes.JSON, // Array of time slots
      allowNull: true
    },
    preferredTeachingMode: {
      type: DataTypes.ENUM('home', 'online', 'both'),
      defaultValue: 'both'
    },
    joinedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  Tutor.associate = (models) => {
    Tutor.belongsTo(models.User, { foreignKey: 'userId' });
    Tutor.hasMany(models.Job, { foreignKey: 'tutorId' });
    Tutor.hasMany(models.Testimonial, { foreignKey: 'tutorId' });
  };

  return Tutor;
};
