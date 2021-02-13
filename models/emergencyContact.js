// const sequelize = require ("sequelize")
// const Schema = sequelize.Schema;

// const Emergency_contact = new Schema({
//     name: {type: String, required: true}, 
//     lastName: {type: String, required: true},
//     phone: {type: Integer, required: true},
// });

// const Emergency_contact = sequelize.Model("Emergency_contact", Emergency_contact);

// module.exports = Emergency_contact;


module.exports = (sequelize, DataTypes) => {
    const EmergencyContact = sequelize.define("EmergencyContact", {
        firstName: { type: DataTypes.String, allowNull: false },
        lastName: { type: DataTypes.String, allowNull: false },
        phone: { type: DataTypes.Integer, allowNull: false },

    })
    EmergencyContact.associate = models => {
        EmergencyContact.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
              }
        })
    }
    return EmergencyContact;
}