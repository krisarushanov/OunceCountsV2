module.exports = function (sequelize, DataTypes) {
  const wpbackpackItem = sequelize.define("wpbackpackItem", {
    accounted_for: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });
  wpbackpackItem.associate = (models) => {
    wpbackpackItem.hasMany(models.Gear, {
      onDelete: "cascade",
    });
  };
  wpbackpackItem.associate = (models) => {
    wpbackpackItem.belongsTo(models.wolfpackBackpack, {
      through: "wolf_pack_backpack_wolfpack",
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return wpbackpackItem;
};
// const Wolf_Pack_Backpack = sequelize.define("wolf_pack_backpack")
// const Gear = sequelize.define("gear")

// Wolf_Pack_Backpack.belongsToMany(Gear, {
//     through: "wp_backpack_item",
//     as: "gear",
//     foreignKey: "wp_backpack_id"

// });

// Gear.belongsToMany(Wolf_Pack_Backpack, {
//     through: "wp_backpack_item",
//     as: "wp_backpack",
//     foreignKey: "gear_id"
// });
