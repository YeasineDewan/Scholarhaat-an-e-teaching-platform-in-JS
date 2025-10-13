import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Student = sequelize.define('Student', {
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
    grade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    school: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parentName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parentPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subjects: {
      type: DataTypes.JSON, // Array of subjects
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

  Student.associate = (models) => {
    Student.belongsTo(models.User, { foreignKey: 'userId' });
    Student.hasMany(models.Job, { foreignKey: 'studentId' });
    Student.hasMany(models.Testimonial, { foreignKey: 'studentId' });
  };

  return Student;
};
