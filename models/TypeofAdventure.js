module.exports = function(sequelize, DataTypes) {
    const Type_Of_Adventure = sequelize.define("Type_Of_Adventure", {
        type_name: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    })
   return Type_Of_Adventure;
}