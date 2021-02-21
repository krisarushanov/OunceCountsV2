// requiring Sequelize ORM to connect our code to database
const sequelize  = require("sequelize");
const Schema = sequelize.Schema;

const backpackSchema = new Schema({
  backpack_id: { type: String, required: true },
  user_id:{ type: String, required: true },
  nickname: { type: String, required: true },
  
  
});

const Backpack = sequelize.model("Backpack", backpackSchema);

module.exports = Backpack;
