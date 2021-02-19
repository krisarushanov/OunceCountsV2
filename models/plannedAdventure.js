module.exports = function (sequelize, DataTypes) {
  const plannedAdventures = sequelize.define("plannedAdventures", {
    location_of_adventure: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });
  plannedAdventures.associate = (models) => {
    plannedAdventures.belongsTo(models.Wolfpack, {
      through: "plannedadventures_wolfpack",
      foreignKey: {
        allowNull: false,
      },
    });
  };
  plannedAdventures.associate = (models) => {
    plannedAdventures.hasOne(models.typeofAdventure, {
      onDelete: "cascade",
    });
  };
  return plannedAdventures;
};
