module.exports = function(sequelize, DataTypes) {
    const Gear = sequelize.define("Gear", {
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            },
        brand: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len: [1]
            }
        },

       }
    })
   return Gear;
}