// const { sequelize } = require(".");

// const Wolf_Pack = sequelize.define("wolf_pack")
// const Type_Of_Adventure = sequelize.define("type_of_adventure")

// Wolf_Pack.belongsToMany(Type_Of_Adventure, {
//     through: "wp_backpack",
//     as: "type_of_adventure",
//     foreignKey: "wolf_pack_id"

// });

// Type_Of_Adventure.belongsToMany(Wolf_Pack, {
//     through: "wpbackpack",
//     as: "wolf_pack",
//     foreignKey: "type_of_adventure_id"

module.exports = function(sequelize, DataTypes) {
    const Wolf_Pack_Backpack = sequelize.define("Gear", {
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
            }
        })
        Wolf_Pack_Backpack.associate = models => {
            Wolf_Pack_Backpack.hasOne(models.Type_of_Adventure, {
                onDelete: "cascade"
            })
           Wolf_Pack_Backpack.belongsTo(models.Wolfpack, {
               through: "Wolf_Pack_Backpack_Wolfpack",
               foreignKey: {
                   allowNull: false
               }
           }
           
           )}
        return Wolf_Pack_Backpack;
    }