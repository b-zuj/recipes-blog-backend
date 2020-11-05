const express = require('express');
const recipesJson = require('./db/recipes.json');

const router = express.Router();

router.get('/recipes', async (req, res, next) => {
  try {
    res.status(200).json(recipesJson);
  } catch (err) {
    next(err);
  }
});

router.get('/recipes/:id', async (req, res, next) => {
  try {
    const recipesData = recipesJson;
    const resData = recipesJson.data.filter(el => el.id === req.params.id);
    recipesData.data = resData;
    res.status(200).json(recipesData);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
