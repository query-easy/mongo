const { expect } = require('chai');
const lo = require('lodash');
const mongodb = require('mongodb');
const faker = require('faker');
const query = require('../../lib/query/index');

const testData = require('../1.seed/test-data');

describe('it should perform array tests on server', () => {
  let collection;
  it('should get collection', (done) => {
    mongodb.connect('mongodb://localhost:27017/my_test_db', { useUnifiedTopology: true }, (dbErr, db) => {
      expect(dbErr).to.be.null;
      collection = db.db().collection('test');
      done();
    });
  });
  it('should perform all test', () => {
    let sports = testData.used.sports[faker.random.number({ min: 0, max: testData.used.sports.length - 1 })];
    collection.find({
      ...query('test').all('sports', sports).toQuery().filter
    }).toArray()
      .then((results) => {
        expect(results.length).to.be.gt(0);
        results.forEach((res) => {
          expect(
            lo.isEqual(
              lo.intersection(res.sports.sort(), sports),
              sports
            )
          ).to.be.true;
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform in test', () => {
    let sports = testData.used.sports[faker.random.number({ min: 0, max: testData.used.sports.length - 1 })];
    collection.find({
      ...query('test').in('sports', sports).toQuery().filter
    }).toArray()
      .then((results) => {
        expect(results.length).to.be.gt(0);
        results.forEach((res) => {
          expect(
            lo.intersection(res.sports.sort(), sports).length
          ).to.be.gt(0);
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform nin test', () => {
    let sports = testData.used.sports[faker.random.number({ min: 0, max: testData.used.sports.length - 1 })];
    collection.find({
      ...query('test').nin('sports', sports).toQuery().filter
    }).toArray()
      .then((results) => {
        expect(results.length).to.be.gt(0);
        results.forEach((res) => {
          expect(
            lo.intersection(res.sports.sort(), sports).length
          ).to.be.equal(0);
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform size test', () => {
    let sports = testData.used.sports[faker.random.number({ min: 0, max: testData.used.sports.length - 1 })];
    collection.find({
      ...query('test').size('sports', sports.length).toQuery().filter
    }).toArray()
      .then((results) => {
        expect(results.length).to.be.gt(0);
        results.forEach((res) => {
          expect(res.sports.length).to.be.equal(sports.length);
        });
      })
      .catch((err) => { throw err; });
  });
});