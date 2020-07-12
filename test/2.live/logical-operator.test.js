const { expect } = require('chai');
const faker = require('faker');
const kindof = require('kindof');
const mongodb = require('mongodb');
const query = require('../../lib/query/index');

const testData = require('../1.seed/test-data');

describe('it should perform logical operator tests on server', () => {
  let collection;
  it('should get collection', (done) => {
    mongodb.connect('mongodb://localhost:27017/my_test_db', { useUnifiedTopology: true }, (dbErr, db) => {
      expect(dbErr).to.be.null;
      collection = db.db().collection('test');
      done();
    });
  });
  it('should perform not test', () => {
    collection.find({
      ...query('test').not('height', new RegExp('height')).toQuery().filter
    }).toArray()
      .then((results) => {
        expect(results.length).to.equal(testData.data.length);
      })
      .catch((err) => { throw err; });
  });
  it('should perform and test', () => {
    let height = testData.used.heights[faker.random.number({ min: 0, max: testData.used.heights.length - 1 })];
    collection.find({
      ...query('test').and(
        (andCB) => andCB.type('address', 'array').gt('height', height)
      ).toQuery().filter
    }).toArray()
      .then((results) => {
        results.forEach((res) => {
          expect(
            res.height > height && kindof(res.address) === 'array'
          ).to.be.true;
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform or test', () => {
    let height = testData.used.heights[faker.random.number({ min: 0, max: testData.used.heights.length - 1 })];
    collection.find({
      ...query('test').or(
        (orCB) => orCB.type('address', 'array').gt('height', height)
      ).toQuery().filter
    }).toArray()
      .then((results) => {
        results.forEach((res) => {
          expect(
            res.height > height || kindof(res.address) === 'array'
          ).to.be.true;
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform nor test', () => {
    let height = testData.used.heights[faker.random.number({ min: 0, max: testData.used.heights.length - 1 })];
    collection.find({
      ...query('test').nor(
        (norCB) => norCB.type('address', 'array').gt('height', height)
      ).toQuery().filter
    }).toArray()
      .then((results) => {
        results.forEach((res) => {
          expect(
            !(res.height > height || !kindof(res.address) === 'array')
          ).to.be.true;
        });
      })
      .catch((err) => { throw err; });
  });
});