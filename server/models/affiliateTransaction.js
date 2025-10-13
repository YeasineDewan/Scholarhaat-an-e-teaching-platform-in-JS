import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const AffiliateTransaction = sequelize.define('AffiliateTransaction', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    affiliateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Affiliates',
        key: 'id'
      }
    },
    referredUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    transactionType: {
      type: DataTypes.ENUM('tutor_registration', 'student_registration', 'completed_lesson', 'payout'),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected', 'paid'),
      defaultValue: 'pending'
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

  AffiliateTransaction.associate = (models) => {
    AffiliateTransaction.belongsTo(models.Affiliate, { foreignKey: 'affiliateId' });
    AffiliateTransaction.belongsTo(models.User, { foreignKey: 'referredUserId', as: 'ReferredUser' });
  };

  return AffiliateTransaction;
};
