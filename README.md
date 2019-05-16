# Edamam Service

### Introduction
Edamam Service is a micro-service built to interact with a calorie tracking app. It takes user input from the front-end and makes a request to the Edamam API to grab recipes associated with that search. Recipes will be stored in the database and this service will either return a recipe from the database if it has it or go make another API call and then store that new recipe.

### Local Setup
1. `Clone` down this repo
1. `cd` into edamam-service
1. Run `npm install`

### How To Use
You will need to go to https://developer.edamam.com/ and obtain an `APP_ID` and `APP_KEY`first.

1. Create a `.env` file and put the `APP_ID` and `APP_KEY` into file like below:
```
APP_ID=YOUR_APP_ID
APP_KEY_YOUR_APP_KEY
```




1. Run `npm start`
1. Use Postman or go to `localhost:3000` to hit the endpoints

### API Endpoints
**Random Recipes For Food Type**

  - `GET /api/v1/recipes?q=FOODNAME`


  _Response_

    status: 200
    body:
    {
      "recipe1": {
          "cook_time": 60,
          "calories": 4230.305691201081,
          "image": "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
          "label": "Chicken Vesuvio",
          "ingredients": [
              "1/2 cup olive oil",
              "5 cloves garlic, peeled",
              "2 large russet potatoes, peeled and cut into chunks",
              "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
              "3/4 cup white wine",
              "3/4 cup chicken stock",
              "3 tablespoons chopped parsley",
              "1 tablespoon dried oregano",
              "Salt and pepper",
              "1 cup frozen peas, thawed"
          ]
      },
      "recipe2": {
          "cook_time": 0,
          "calories": 3033.2012500008163,
          "image": "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
          "label": "Chicken Paprikash",
          "ingredients": [
              "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
              "1/2 teaspoon salt",
              "1/4 teaspoon black pepper",
              "1 tablespoon butter – cultured unsalted (or olive oil)",
              "240 grams onion sliced thin (1 large onion)",
              "70 grams Anaheim pepper chopped (1 large pepper)",
              "25 grams paprika (about 1/4 cup)",
              "1 cup chicken stock",
              "1/2 teaspoon salt",
              "1/2 cup sour cream",
              "1 tablespoon flour – all-purpose"
          ]
      },
      "recipe3": {
          "cook_time": 270,
          "calories": 1092.360634999871,
          "image": "https://www.edamam.com/web-img/fd1/fd1afed1849c44f5185720394e363b4e.jpg",
          "label": "Chicken Gravy",
          "ingredients": [
              "4 cups chicken bones and wings",
              "2 tablespoons unsalted butter, softened",
              "2 tablespoons all-purpose flour",
              "4 cups homemade bruce and eric bromberg's chicken stock, or store-bought low-sodium chicken stock",
              "1 tablespoon fresh thyme leaves",
              "Coarse salt and freshly ground black pepper"
          ]
      },
      "recipe4": {
          "cook_time": 0,
          "calories": 3298.8,
          "image": "https://www.edamam.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg",
          "label": "Catalan Chicken",
          "ingredients": [
              "1 whole 4-pound chicken, quartered",
              "8 slices bacon",
              "30 cloves garlic",
              "3 lemons, peeled, rinds thinly sliced and reserved",
              "½ cup Banyuls or another fortified dessert wine",
              "1 cup veal or chicken stock"
          ]
      },
      "recipe5": {
          "cook_time": 424,
          "calories": 2643.1901685250004,
          "image": "https://www.edamam.com/web-img/d4b/d4bb1e6c7a6c3738d8e01707eb0ad83d.jpg",
          "label": "Citrus Roasted Chicken",
          "ingredients": [
              "1 chicken, about 3.5 to 4 pounds",
              "1 lemon",
              "1 blood orange",
              "1 tangerine or clementine",
              "Kosher salt",
              "1/2 cup chicken broth"
          ]
      },
      "recipe6": {
          "cook_time": 0,
          "calories": 4107.49372402923,
          "image": "https://www.edamam.com/web-img/bd4/bd47ac0557ade02871750518d56ba928.jpg",
          "label": "Persian Chicken",
          "ingredients": [
              "2 large onions",
              "750 g chicken",
              "500 g mushrooms",
              "1 cup water",
              "1 cup red wine",
              "2 tsps chicken stock",
              "200 ml mayonnaise",
              "200 ml cream",
              "Small bunch of parsley",
              "1 tsp curry powder"
          ]
      },
      "recipe7": {
          "cook_time": 10,
          "calories": 4278.876994575,
          "image": "https://www.edamam.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2.jpg",
          "label": "Kreplach (Chicken Dumplings)",
          "ingredients": [
              "1½ teaspoons canola oil",
              "½ small shallot, finely chopped",
              "1 cup (about ½ pound) raw, boneless chicken meat (preferably from 3 boneless chicken thighs), roughly chopped",
              "⅔ cup (about ¼ pound) chicken skin and fat (reserved from the 3 chicken thighs)",
              "2 chicken livers (optional)",
              "2 garlic cloves, finely chopped",
              "¼ cup finely chopped chives, plus extra for serving",
              "1¼ teaspoons kosher salt",
              "¾ teaspoon freshly ground black pepper",
              "30 to 34 square wonton wrappers",
              "8 cups store-bought or homemade chicken broth"
          ]
      },
      "recipe8": {
          "cook_time": 0,
          "calories": 708.4780000000001,
          "image": "https://www.edamam.com/web-img/245/245252a20f66378b825b918781a422b4.jpg",
          "label": "Twistin’ Chicken",
          "ingredients": [
              "2 boneless, skinless chicken breasts , or 1 pound chicken tenders",
              "2 egg whites",
              "juice from ½ lemon",
              "2 teaspoons cornstarch"
          ]
      },
      "recipe9": {
          "cook_time": 0,
          "calories": 1651.0616125004635,
          "image": "https://www.edamam.com/web-img/a29/a293566f53abc01af0a24157134b4a87.jpg",
          "label": "Chicken Piccata",
          "ingredients": [
              "2-4 boneless, skinless chicken breast halves (1 1/2 pound total), or 4-8 chicken cutlets",
              "1/2 cup flour",
              "1/4 teaspoon salt",
              "Pinch ground black pepper",
              "3 Tbsp grated Parmesan cheese",
              "4 Tbsp olive oil",
              "4 Tbsp butter",
              "1/2 cup chicken stock or dry white wine (such as a Sauvignon Blanc)",
              "2 Tbsp lemon juice",
              "1/4 cup brined capers",
              "2 Tbsp fresh chopped parsley"
          ]
      },
      "recipe10": {
          "cook_time": 0,
          "calories": 2584.4782139080803,
          "image": "https://www.edamam.com/web-img/25f/25feccd2eed4722604be4a9ffa1ac768.jpg",
          "label": "Roast Chicken",
          "ingredients": [
              "1 whole chicken, about 3-4 pounds",
              "-- Salt and fresh-ground pepper, to taste",
              "3 to 4 sprigs thyme, or other herbs",
              "-- Olive oil, to taste",
              "-- Chicken stock (optional)"
          ]
        }
      }


**Random Recipes For Number Of Ingredients**

This Endpoint will take in user input and return recipes that use less ingredients then the specified amount. Input can be a range or a maximum number of ingredients.

  - `GET /api/v1/recipes/ingredients?ingr=[min..max]`

  _Response_


    status: 200
    body:
    {
      "recipe1": {
          "cook_time": 60,
          "calories": 4230.305691201081,
          "image": "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
          "label": "Chicken Vesuvio",
          "ingredients": [
              "1/2 cup olive oil",
              "5 cloves garlic, peeled",
              "2 large russet potatoes, peeled and cut into chunks",
              "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
              "3/4 cup white wine",
              "3/4 cup chicken stock",
              "3 tablespoons chopped parsley",
              "1 tablespoon dried oregano",
              "Salt and pepper",
              "1 cup frozen peas, thawed"
          ]
      },
      "recipe2": {
          "cook_time": 0,
          "calories": 3033.2012500008163,
          "image": "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
          "label": "Chicken Paprikash",
          "ingredients": [
              "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
              "1/2 teaspoon salt",
              "1/4 teaspoon black pepper",
              "1 tablespoon butter – cultured unsalted (or olive oil)",
              "240 grams onion sliced thin (1 large onion)",
              "70 grams Anaheim pepper chopped (1 large pepper)",
              "25 grams paprika (about 1/4 cup)",
              "1 cup chicken stock",
              "1/2 teaspoon salt",
              "1/2 cup sour cream",
              "1 tablespoon flour – all-purpose"
          ]
      },
      ... More Recipe Objects
    }

**Random Recipes For Total Cook Time**

This Endpoint will take in user input and return recipes that are less than the entered cook time. Input here is a maximum cook time value.

- `GET /api/v1/recipes/cookTime?time=COOKTIME`

_Response_


    status: 200
    body:
    {
      "recipe1": {
          "cook_time": 60,
          "calories": 4230.305691201081,
          "image": "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
          "label": "Chicken Vesuvio",
          "ingredients": [
              "1/2 cup olive oil",
              "5 cloves garlic, peeled",
              "2 large russet potatoes, peeled and cut into chunks",
              "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
              "3/4 cup white wine",
              "3/4 cup chicken stock",
              "3 tablespoons chopped parsley",
              "1 tablespoon dried oregano",
              "Salt and pepper",
              "1 cup frozen peas, thawed"
          ]
      },
      "recipe2": {
          "cook_time": 0,
          "calories": 3033.2012500008163,
          "image": "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
          "label": "Chicken Paprikash",
          "ingredients": [
              "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
              "1/2 teaspoon salt",
              "1/4 teaspoon black pepper",
              "1 tablespoon butter – cultured unsalted (or olive oil)",
              "240 grams onion sliced thin (1 large onion)",
              "70 grams Anaheim pepper chopped (1 large pepper)",
              "25 grams paprika (about 1/4 cup)",
              "1 cup chicken stock",
              "1/2 teaspoon salt",
              "1/2 cup sour cream",
              "1 tablespoon flour – all-purpose"
          ]
      },
      ... More Recipe Objects
    }

**Random Recipes For Total Calories Per Serving**

This Endpoint will take in user input and return recipes that are less than the entered calories. Input here can be a range or a maximum value.

- `GET /api/v1/recipes/calories?calories=[min..max]`

_Response_


    status: 200
    body:
    {
      "recipe1": {
          "cook_time": 60,
          "calories": 4230.305691201081,
          "image": "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
          "label": "Chicken Vesuvio",
          "ingredients": [
              "1/2 cup olive oil",
              "5 cloves garlic, peeled",
              "2 large russet potatoes, peeled and cut into chunks",
              "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
              "3/4 cup white wine",
              "3/4 cup chicken stock",
              "3 tablespoons chopped parsley",
              "1 tablespoon dried oregano",
              "Salt and pepper",
              "1 cup frozen peas, thawed"
          ]
      },
      "recipe2": {
          "cook_time": 0,
          "calories": 3033.2012500008163,
          "image": "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
          "label": "Chicken Paprikash",
          "ingredients": [
              "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
              "1/2 teaspoon salt",
              "1/4 teaspoon black pepper",
              "1 tablespoon butter – cultured unsalted (or olive oil)",
              "240 grams onion sliced thin (1 large onion)",
              "70 grams Anaheim pepper chopped (1 large pepper)",
              "25 grams paprika (about 1/4 cup)",
              "1 cup chicken stock",
              "1/2 teaspoon salt",
              "1/2 cup sour cream",
              "1 tablespoon flour – all-purpose"
          ]
      },
      ... More Recipe Objects
    }



### Testing
Testing is done with the Jest testing framework. To test locally, run:

`nmp test`

To get back our coverage, run:

`npm test -- --coverage`

In order to avoid hitting the Edamam Rate Limits, we implemented Nocks, which are essentially webmocks for node. If you would like to test without the use of Nocks, simply delete the `fixtures` directory.

### Tech Stack
  - JavaScript
  - Node
  - Express
  - Sequelize
  - Jest

### Core Contributors
Scott Thomas & Manoj Panta
