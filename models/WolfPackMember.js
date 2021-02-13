// const sequelize = require ("sequelize")
// const Schema = sequelize.Schema;

// const WolfPackMember = new Schema({
//   //Update this 
// });

// const WolfPackMember = sequelize.Model("WolfPackMember", WolfPackMember);

// module.exports = WolfPackMember;

module.exports = (sequelize, DataTypes) => {
  const WolfPackMember = sequelize.define("WolfPackMember", {
      // firstName: { type: DataTypes.String, allowNull: false },
      // lastName: { type: DataTypes.String, allowNull: false },
      // phone: { type: DataTypes.Integer, allowNull: false },

  })
  WolfPackMember.associate = models => {
    WolfPackMember.belongsTo(models.Wolfpack, {
          foreignKey: {
              allowNull: false
            }
      })
  }
}