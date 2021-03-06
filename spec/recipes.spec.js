var shell= require('shelljs');
var request = require('supertest');
var app = require('../app');
var pry = require('pryjs');
const recipes = require('../fixtures/recipes.js')
const cookTime = require('../fixtures/cookTime.js')
const ingredients = require('../fixtures/ingredients.js')
const calories = require('../fixtures/calories.js')
describe('Edamam Recipes API', () => {
  beforeAll(() => {
    shell.exec('npx sequelize db:drop')
    shell.exec('npx sequelize db:create')
    shell.exec('npx sequelize db:migrate')
    // shell.exec('npx sequelize db:seed:all')
  });

//recipes endpoint
  describe('Test GET /api/v1/recipes', () => {
    test('should return a 200 status and all recipes within the desired search parameters', () => {
      return request(app).get('/api/v1/recipes?q=chicken').then(response => {
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
        expect(Object.keys(response.body.recipe1)).toContain('cook_time')
        expect(Object.keys(response.body.recipe1)).toContain('calories')
        expect(Object.keys(response.body.recipe1)).toContain('image')
        expect(Object.keys(response.body.recipe1)).toContain('label')
        expect(Object.keys(response.body.recipe1)).toContain('ingredients')
      })
    })
  });
// cookTime endpoint
  describe('Test GET /api/v1/recipes/cookTime', () => {
    test('should return a 200 status and all recipes within the desired search parameters', () => {
      return request(app).get('/api/v1/recipes/cookTime?time=15-30').then(response => {
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
        expect(Object.keys(response.body.recipe1)).toContain('cook_time')
        expect(Object.keys(response.body.recipe1)).toContain('calories')
        expect(Object.keys(response.body.recipe1)).toContain('image')
        expect(Object.keys(response.body.recipe1)).toContain('label')
        expect(Object.keys(response.body.recipe1)).toContain('ingredients')
        expect(response.body.recipe1.cook_time).toBeGreaterThanOrEqual(15)
        expect(response.body.recipe1.cook_time).toBeLessThanOrEqual(30)
      })
    })
  });
  // fewest ingredients endpoint
  describe('Test GET /api/v1/recipes/ingredients', () => {
    test('should return a 200 status and all recipes within the desired search parameters', () => {
      return request(app).get('/api/v1/recipes/ingredients?ingr=10').then(response => {
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
        expect(Object.keys(response.body.recipe1)).toContain('cook_time')
        expect(Object.keys(response.body.recipe1)).toContain('calories')
        expect(Object.keys(response.body.recipe1)).toContain('image')
        expect(Object.keys(response.body.recipe1)).toContain('label')
        expect(Object.keys(response.body.recipe1)).toContain('ingredients')
        expect(response.body.recipe1.ingredients.length).toBeLessThanOrEqual(10)
      })
    })
  });

  // recipe by calorie range endpoint
  describe('Test GET /api/v1/recipes/calories', () => {
    test('should return a 200 status and all recipes within the desired search parameters', () => {
      return request(app).get('/api/v1/recipes/calories?calories=500-600').then(response => {
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
        expect(Object.keys(response.body.recipe1)).toContain('cook_time')
        expect(Object.keys(response.body.recipe1)).toContain('calories')
        expect(Object.keys(response.body.recipe1)).toContain('image')
        expect(Object.keys(response.body.recipe1)).toContain('label')
        expect(Object.keys(response.body.recipe1)).toContain('ingredients')
        expect(response.body.recipe1.calories).toBeGreaterThanOrEqual(500)
      })
    })
  });
});
