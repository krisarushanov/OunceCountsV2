module.exports = (sequelize, DataTypes) => {
  const Gear = sequelize.define("Gear", {
    weight: { type: DataTypes.INTEGER, allowNull: false },
    brand: { type: DataTypes.STRING, allowNull: false },
  });
 
  Gear.associate = (models) => {
    Gear.belongsTo(models.wolfpackBackpack, {
      through: "gear_wolfpackBackpack",
      foreignKey: {
        allowNull: false,
      },
    });
  };
 
  return Gear;
};
