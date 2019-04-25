module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
      userId:DataTypes.INTEGER
    });
  
    return Sale;
  }