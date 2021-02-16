module.exports = function(sequelize, DataTypes) {
    const Planned_Adventures = sequelize.define("Planned_Adventures", {
        location_of_adventure: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
       }
    })
    Planned_Adventures.associate = models => {
        Planned_Adventures.belongsTo(models.Wolfpack, {
            through: "planned_adventures_Wolfpack",
            foreignKey: {
                allowNull: false
            }
        }
        
    )} 
        Planned_Adventures.hasMany(models.TypeofAdventure, {
            onDelete: "cascade"
        })
   return Planned_Adventures;
}

// const Wolf_Pack = sequelize.define("wolf_pack")
// const Type_Of_Adventure = sequelize.define("type_of_adventure")

// Wolf_Pack.belongsToMany(Type_Of_Adventure, {
//     through: "planned_adventures",
//     as: "type_of_adventure",
//     foreignKey: "wolf_pack_id"

// });

// Type_Of_Adventure.belongsToMany(Wolf_Pack, {
//     through: "planned_adventures",
//     as: "wolf_pack",
//     foreignKey: "type_of_adventure_id"
// });