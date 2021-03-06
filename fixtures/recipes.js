const nock = require('nock')

const ChickenRecipes = nock('https://api.edamam.com')
.get(`/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
.reply(200, {
"q": "chicken",
"hits": [
    {
      "recipe": {
          "label": "Chicken Vesuvio",
          "image": "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
          "yield": 4,
          "ingredientLines": [
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
          ],
        "calories": 4230,
        "totalTime": 60
      }
    }
]})

module.exports =ChickenRecipes;
