const mongoose = require('mongoose');

const Ingredient = require('../models/Ingredients.js');


exports.getIngredients = (req, res) => {
    Ingredient.find()
    .then(ingredients => {
      res.render('index', {
        title: 'Ingredients',
        ingredients: ingredients
      });
    });
};
