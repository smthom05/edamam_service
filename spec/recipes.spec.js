var shell= require('shelljs');
var request = require('supertest');
var app = require('../app');
var pry = require('pryjs')

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
//cookTime endpoint
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
  //fewest ingredients endpoint
  describe('Test GET /api/v1/recipes/cookTime', () => {
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
        expect(response.body.recipe2.ingredients.length).toBeLessThanOrEqual(10)
        expect(response.body.recipe3.ingredients.length).toBeLessThanOrEqual(10)
        expect(response.body.recipe4.ingredients.length).toBeLessThanOrEqual(10)
        expect(response.body.recipe5.ingredients.length).toBeLessThanOrEqual(10)
        expect(response.body.recipe6.ingredients.length).toBeLessThanOrEqual(10)
        expect(response.body.recipe7.ingredients.length).toBeLessThanOrEqual(10)
        expect(response.body.recipe8.ingredients.length).toBeLessThanOrEqual(10)
        expect(response.body.recipe9.ingredients.length).toBeLessThanOrEqual(10)
        expect(response.body.recipe10.ingredients.length).toBeLessThanOrEqual(10)
      })
    })
  });
});
