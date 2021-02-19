// const sequelize = require ("sequelize")
// const Schema = sequelize.Schema;

// const Backpack = new Schema({
//     nickname: {type: String, required: true},

// });

// const Backpack = sequelize.Model("Emergency_contact", Backpack);

// module.exports = Backpack;

module.exports = (sequelize, DataTypes) => {
  const Backpack = sequelize.define("Backpack", {
    nickName: { type: DataTypes.STRING, allowNull: false },
  });
  Backpack.associate = (models) => {
    Backpack.belongsTo(models.User, {
      through: "backpack_user",
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Backpack;
};
