// const sequelize = require ("sequelize")
// const Schema = sequelize.Schema;

// const Wolfpack = new Schema({
//     wolf_pack_name: {type: String, required: true}, 
//     lastpack_leader: {type: String, required: true},
// });

// const Wolfpack = sequelize.Model("Wolfpack", Wolfpack);

// module.exports = Wolfpack;

module.exports = (sequelize, DataTypes) => {
    const Wolfpack = sequelize.define("Wolfpack", {
        wolfpackName: { type: DataTypes.String, allowNull: false },
        wolfpackLeader: { type: DataTypes.String, allowNull: false },
        
    })

    Wolfpack.associate = models => {
        Wolfpack.hasOne(models.Planned_Adventure, {
            onDelete: "cascade"
        })
        Wolfpack.hasOne(models.Wolf_Pack_Backpack, {
            onDelete: "cascade"
        })
    }

    return Wolfpack;

}