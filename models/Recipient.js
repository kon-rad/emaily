const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipeientSchema;
