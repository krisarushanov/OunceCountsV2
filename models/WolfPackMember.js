// const sequelize = require ("sequelize")
// const Schema = sequelize.Schema;

// const WolfPackMember = new Schema({
//   //Update this
// });

// const WolfPackMember = sequelize.Model("WolfPackMember", WolfPackMember);

// module.exports = WolfPackMember;

module.exports = (sequelize, DataTypes) => {
  const wolfpackMember = sequelize.define("wolfpackMember", {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.INTEGER, allowNull: false },
  });
  wolfpackMember.associate = (models) => {
    wolfpackMember.belongsTo(models.Wolfpack, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return wolfpackMember;
};
