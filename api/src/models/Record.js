const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('record', {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    winner: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    losser: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  }, {
    freezeTableName: true,
    updatedAt: false,
  });
};

