

exports.getIngredientsApi = (req, res) => {
  Ingredient.find()
  .then(ingredients => {
    res.json(ingredients);
  });
}

exports.postIngredientsApi = (req, res) => {
  const name = req.query.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.redirect('/')
  });
};
