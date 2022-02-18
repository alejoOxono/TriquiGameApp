const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    shield:{
      type: DataTypes.STRING,
      allowNull: true,
    },

    map:{
      type: DataTypes.STRING,
    },

    info:{
      type: DataTypes.STRING,
    },

    continent:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    capital:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    region: {
      type: DataTypes.STRING,
    },

    area:{
      type: DataTypes.DOUBLE,
    },

    population:{
      type: DataTypes.INTEGER,
    }

  },{
    freezeTableName: true,
    timestamps: false
  });
};

