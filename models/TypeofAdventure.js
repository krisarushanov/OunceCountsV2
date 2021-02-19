module.exports = function (sequelize, DataTypes) {
  const typeofAdventure = sequelize.define("typeofAdventure", {
    type_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });
  typeofAdventure.associate = (models) => {
    typeofAdventure.belongsTo(models.plannedAdventures, {
      through: "typeofAdventure_plannedAdventures",
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return typeofAdventure;
};
