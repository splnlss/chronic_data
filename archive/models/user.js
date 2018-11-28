'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    addressId: DataTypes.STRING,
  }, {});

  User.associate = function(models) {
    User.belongsTo(models.Addresses, {foreignKey: "addressId"})
  };
  return User;
};
