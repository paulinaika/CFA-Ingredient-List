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

exports.getIngredientsApi = (req, res) => {
  Ingredient.find()
  .then(ingredients => {
    res.json(ingredients);
  });
}

exports.postIngredients = (req, res) => {
  // console.log('reqy.body is:', req.body);
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.redirect('/')
  });
};

exports.postIngredientsApi = (req, res) => {
  const name = req.query.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.redirect('/')
  });
};


exports.editIngredients = (req, res) => {
  // console.log('reqy.body is:', req.body);
  Ingredient.findOne({ _id: req.params.id })
    .then(ingredient => {
      res.render('editIngredient', {ingredient: ingredient});
    });
  // res.send(req.params)
};


exports.editIngredientsApi = (req, res) => {
  // console.log('reqy.body is:', req.body);
  Ingredient.findOne({ _id: req.params.id })
    .then(ingredient => {
      res.json(ingredient);
  // res.send(req.params)
  });
};

exports.updateIngredients = (req, res) => {
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true //returns new ingredient
  })
    .then(ingredient => {
      res.redirect('/')
  });
};

exports.updateIngredientsApi = (req, res) => {
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.query, {
    new: true //returns new ingredient
  })
    .then(ingredient => {
      res.redirect(`/api/${req.params.id}`);
  });
};


exports.deleteIngredients = (req, res) => {
  Ingredient.findOne({ _id: req.params.id }).remove((err, data) => {
    res.redirect('/')
  });
};

exports.deleteIngredientsApi = (req, res) => {
  Ingredient.findOne({ _id: req.params.id }).remove((err, data) => {
    res.redirect('/')
  });
};
