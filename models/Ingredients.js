const mongoose = require('mongoose');
const { Schema } = mongoose;
// destructuring

// // creating database - recipe
// mongoose.connect('mongodb://localhost/recipes')
// const { connection:db } = mongoose;
//
// // when the connection error, it will display connection error
// db.on('error', console.error.bind(console, 'connection error:'));
// // when the connection is open, it will connect it to the database
// db.once('open', () => {
//  console.log('connected to recipe database')
// });

const ingredientSchema = new Schema({
  name: {
    type: String,
    trim: true  //trim white spaces
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})


const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
