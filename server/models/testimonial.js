import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Testimonial = sequelize.define('Testimonial', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tutorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Tutors',
        key: 'id'
      }
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Students',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
    type: {
      type: DataTypes.ENUM('tutor', 'student', 'parent', 'stakeholder'),
      allowNull: false
    },
    isApproved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  Testimonial.associate = (models) => {
    Testimonial.belongsTo(models.Tutor, { foreignKey: 'tutorId' });
    Testimonial.belongsTo(models.Student, { foreignKey: 'studentId' });
  };

  return Testimonial;
};
