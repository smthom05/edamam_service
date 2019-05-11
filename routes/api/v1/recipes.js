var express = require("express");
var router = express.Router();
var Recipe = require('../../../models').Recipe;
var pry = require('pryjs');
const fetch = require('node-fetch');
require('dotenv').config();
var foodArray = ["Chicken", "Beef", "Tofu", "pastas", "speghetti", "noodles"]

router.get('/', async function(req, res) {
  const getRecipes = async () => {
    //constructing geocoding url
    const edamamUrl = new URL(`https://api.edamam.com/search?q=${req.query.q}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
    const recipesData = await mainFetch(edamamUrl);

    // _forecastFormatter will format the data received fron api key according to our needs.
    return await  _recipeFormatter(recipesData)
  }
  var data =  await getRecipes();
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify(data));
});

router.get('/cookTime', async function(req, res) {
  var food = foodArray[Math.floor(Math.random()*foodArray.length)]

  const getRecipes = async () => {
    //constructing geocoding url
    const edamamUrl = new URL(`https://api.edamam.com/search?q=${food}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&time=${req.query.time}`)
    const recipesData = await mainFetch(edamamUrl);

    // _forecastFormatter will format the data received fron api key according to our needs.
    return await  _recipeFormatter(recipesData)
  }
  var data =  await getRecipes();
  eval(pry.it)
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify(data));
});

// Helper Methods
function _recipeFormatter(result) {
  var recipesObj = {};
  for (var i = 0; i < result.hits.length; i++) {
    recipesObj[`recipe${i+1}`] = {
      "cook_time": result.hits[i].recipe.totalTime,
      "calories":result.hits[i].recipe.calories,
      "image":result.hits[i].recipe.image,
      "label":result.hits[i].recipe.label,
      "ingredients": result.hits[i].recipe.ingredientLines
      }
    }
  return recipesObj;
}

const mainFetch = async (url) => {
  try{
    const response = await fetch(url)
    return await response.json()
  }catch(error){
    throw new Error(error.message)
  }
}

module.exports = router;
