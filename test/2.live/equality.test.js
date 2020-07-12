const { expect } = require('chai');
const mongodb = require('mongodb');
const faker = require('faker');
const query = require('../../lib/query/index');

const testData = require('../1.seed/test-data');

describe('it should perform equality tests on server', () => {
  let collection;
  it('should get collection', (done) => {
    mongodb.connect('mongodb://localhost:27017/my_test_db', { useUnifiedTopology: true }, (dbErr, db) => {
      expect(dbErr).to.be.null;
      collection = db.db().collection('test');
      done();
    });
  });
  it('should perform eq test', () => {
    let country = testData.used.countries[faker.random.number({ min: 0, max: testData.used.countries.length - 1 })];
    collection.find({
      ...query('test').eq('country', country).toQuery().filter
    }).toArray()
      .then((results) => {
        expect(results.length).to.be.gt(0);
        results.forEach((res) => {
          expect(res.country).to.equal(country);
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform neq test', () => {
    let country = testData.used.countries[faker.random.number({ min: 0, max: testData.used.countries.length - 1 })];
    collection.find({
      ...query('test').neq('country', country).toQuery().filter
    }).toArray()
      .then((results) => {
        expect(results.length).to.be.gt(0);
        results.forEach((res) => {
          expect(res.country).to.not.equal(country);
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform lt test', () => {
    let height = testData.used.heights[faker.random.number({ min: 0, max: testData.used.heights.length - 1 })];
    collection.find({
      ...query('test').lt('height', height).toQuery().filter
    }).toArray()
      .then((results) => {
        results.forEach((res) => {
          expect(res.height).to.be.lt(height);
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform gt test', () => {
    let height = testData.used.heights[faker.random.number({ min: 0, max: testData.used.heights.length - 1 })];
    collection.find({
      ...query('test').gt('height', height).toQuery().filter
    }).toArray()
      .then((results) => {
        results.forEach((res) => {
          expect(res.height).to.be.gt(height);
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform lte test', () => {
    let height = testData.used.heights[faker.random.number({ min: 0, max: testData.used.heights.length - 1 })];
    collection.find({
      ...query('test').lte('height', height).toQuery().filter
    }).toArray()
      .then((results) => {
        results.forEach((res) => {
          expect(res.height).to.be.lte(height);
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform gte test', () => {
    let height = testData.used.heights[faker.random.number({ min: 0, max: testData.used.heights.length - 1 })];
    collection.find({
      ...query('test').gte('height', height).toQuery().filter
    }).toArray()
      .then((results) => {
        results.forEach((res) => {
          expect(res.height).to.be.gte(height);
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform regex test', () => {
    let namePrefix =
      new RegExp(
        testData.used.namePrefix[faker.random.number({ min: 0, max: testData.used.namePrefix.length - 1 })],
        'i'
      );
    collection.find({
      ...query('test').regex('name', namePrefix).toQuery().filter
    }).toArray()
      .then((results) => {
        results.forEach((res) => {
          expect(namePrefix.test(res.name)).to.be.true;
        });
      })
      .catch((err) => { throw err; });
  });
});