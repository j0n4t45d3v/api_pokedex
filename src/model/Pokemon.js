import mongoose from "mongoose";
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  _id: Number,
  name: {
    type: String,
    unique: true,
    trim: true,
  },
  image: String,

  description: String,

  type: Array,
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

export default Pokemon;
