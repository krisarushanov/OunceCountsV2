module.exports = (sequelize, DataTypes) => {
  const Wolfpack = sequelize.define("Wolfpack", {
    wolfpackName: { type: DataTypes.STRING, allowNull: false },
    wolfpackLeader: { type: DataTypes.STRING, allowNull: false },
  });

  Wolfpack.associate = (models) => {
    Wolfpack.hasOne(models.plannedAdventures, {
      onDelete: "cascade",
    });
  };
  Wolfpack.associate = (models) => {
    Wolfpack.hasOne(models.wolfpackBackpack, {
      onDelete: "cascade",
    });
  };
  return Wolfpack;
};
