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
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.INTEGER, allowNull: false },
  });
  User.associate = (models) => {
    User.hasOne(models.EmergencyContact, {
      onDelete: "cascade",
    });
  };
  User.associate = (models) => {
    User.hasMany(models.Backpack, {
      onDelete: "cascade",
    });
  };
  return User;
};
