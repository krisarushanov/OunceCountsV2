// requiring Sequelize ORM to connect our code to database
const sequelize  = require("sequelize");
const Schema = sequelize.Schema;

const wolfpack_backpack_nonAlphaSchema = new Schema({
  wp_backpack_id: { type: String, required: true },
  wolf_pack_id : { type: String, required: true },
  type_of_adventure:{ type: String, required: true },
  
});

const Wolfpack_backpack_nonAlpha = sequelize.model("Wolfpack_backpack_nonalpha", wolfpack_backpack_nonAlphaSchema);

module.exports = Wolfpack_backpack_nonAlpha;
