
module.exports = function(sequelize, DataTypes) {
    const Wolf_Pack_Backpack_Item = sequelize.define("Wolf_Pack_Backpack_Item", {
        accounted_for: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [1]
            },
       }
    })
    Wolf_Pack_Backpack_Item.associate = models  => {
           Wolf_Pack_Backpack_Item.hasMany(models.Gear, {
            onDelete: "cascade"
        })
       Wolf_Pack_Backpack_Item.belongto(models.Wolf_Pack_Backpack, {
           through:"wolf_pack_backpack_wolfpack",
           foreignKey: {
               allowNull: false
           }
       }

       )}
       
   return Wolf_Pack_Backpack_Item;
}

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