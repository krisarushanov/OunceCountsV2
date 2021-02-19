module.exports = function (sequelize, DataTypes) {
  const wolfpackBackpack = sequelize.define("wolfpackBackpack", {
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  wolfpackBackpack.associate = (models) => {
    wolfpackBackpack.hasOne(models.typeofAdventure, {
      onDelete: "cascade",
    });
  };
 
  wolfpackBackpack.associate = (models) => {
    wolfpackBackpack.belongsTo(models.Wolfpack, {
      through: "wolfpackBackpack_Wolfpack",
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return wolfpackBackpack;
};

