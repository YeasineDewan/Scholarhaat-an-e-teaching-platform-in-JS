import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Job = sequelize.define('Job', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    jobId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Students',
        key: 'id'
      }
    },
    tutorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Tutors',
        key: 'id'
      }
    },
    className: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    subjects: {
      type: DataTypes.JSON, // Array of subjects
      allowNull: false
    },
    feePerWeek: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    tutorGender: {
      type: DataTypes.ENUM('male', 'female', 'any'),
      defaultValue: 'any'
    },
    tutorMode: {
      type: DataTypes.ENUM('home', 'online', 'both'),
      defaultValue: 'home'
    },
    tutorTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('open', 'assigned', 'completed', 'cancelled'),
      defaultValue: 'open'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  Job.associate = (models) => {
    Job.belongsTo(models.Student, { foreignKey: 'studentId' });
    Job.belongsTo(models.Tutor, { foreignKey: 'tutorId' });
  };

  return Job;
};
