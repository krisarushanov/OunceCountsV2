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
  const emergencyContact = sequelize.define("emergencyContact", {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.INTEGER, allowNull: false },
  });
 
  emergencyContact.associate = (models) => {
    emergencyContact.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
 
  return emergencyContact;
};
