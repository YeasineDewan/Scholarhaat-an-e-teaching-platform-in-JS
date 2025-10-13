import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Affiliate = sequelize.define('Affiliate', {
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
    referralCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    totalEarnings: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    },
    pendingEarnings: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    },
    paidEarnings: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    },
    tutorReferrals: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    studentReferrals: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    completedLessons: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paymentDetails: {
      type: DataTypes.JSON,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  Affiliate.associate = (models) => {
    Affiliate.belongsTo(models.User, { foreignKey: 'userId' });
    Affiliate.hasMany(models.AffiliateTransaction, { foreignKey: 'affiliateId' });
  };

  return Affiliate;
};
