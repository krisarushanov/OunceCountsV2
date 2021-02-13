// const sequelize = require ("sequelize")
// const Schema = sequelize.Schema;

// const User = new Schema({
//     firstName: {type: String, required: true}, 
//     lastName: {type: String, required: true},
//     username: {type: String, required: true},
//     email: {type: String, required: true},
//     phone: {type: Integer, required: true},


// });

// const User = sequelize.Model("Emergency_contact", User);

// module.exports = User;

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        firstName: { type: DataTypes.String, allowNull: false },
        lastName: { type: DataTypes.String, allowNull: false },
        username: { type: DataTypes.String, allowNull: false },
        email: { type: DataTypes.String, allowNull: false },
        phone: { type: DataTypes.Integer, allowNull: false },

    })
    User.associate = models => {
        User.hasOne(models.EmergencyContact, {
            onDelete: "cascade"
        })
        User.hasMany(models.Backpack, {
            onDelete: "cascade"
        })
    }
    return User;

}