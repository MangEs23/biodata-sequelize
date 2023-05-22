const { DataTypes } = require('sequelize');

const BiodataModel = (Sequelize, sequelize) => {
  const Biodata = sequelize.define('Biodatas', {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tempat_lahir: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Biodata;
};

module.exports = BiodataModel;
