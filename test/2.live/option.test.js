const { expect } = require('chai');
const mongodb = require('mongodb');
const query = require('../../lib/query/index');

const testData = require('../1.seed/test-data');

describe('it should perform filter option tests on server', () => {
  let collection;
  it('should get collection', (done) => {
    mongodb.connect('mongodb://localhost:27017/my_test_db', { useUnifiedTopology: true }, (dbErr, db) => {
      expect(dbErr).to.be.null;
      collection = db.db().collection('test');
      done();
    });
  });
  it('should perform offset test', () => {
    collection.find({}, {
      ...query('test').offset(100).toQuery().options
    }).toArray()
      .then((results) => {
        expect(results.length).to.be.equal(testData.data.length - 100);
      })
      .catch((err) => { throw err; });
  });
  it('should perform limit test', () => {
    collection.find({}, {
      ...query('test').limit(100).toQuery().options
    }).toArray()
      .then((results) => {
        expect(results.length).to.be.equal(100);
      })
      .catch((err) => { throw err; });
  });
  it('should perform sort asc test', () => {
    collection.find({}, {
      ...query('test').sort('asc', 'height').toQuery().options
    }).toArray()
      .then((results) => {
        let prev = Number.MIN_VALUE;
        results.forEach((res) => {
          expect(res.height >= prev).to.be.true;
          prev = res.height;
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform sort desc test', () => {
    collection.find({}, {
      ...query('test').sort('desc', 'height').toQuery().options
    }).toArray()
      .then((results) => {
        let prev = Number.MAX_VALUE;
        results.forEach((res) => {
          expect(res.height <= prev).to.be.true;
          prev = res.height;
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform select test', () => {
    collection.find({}, {
      ...query('test').select(true, 'address', 'height').toQuery().options
    }).toArray()
      .then((results) => {
        results.forEach((res) => {
          expect(res).to.haveOwnProperty('address');
          expect(res).to.haveOwnProperty('height');
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform deselect test', () => {
    collection.find({}, {
      ...query('test').select(false, 'sports', 'name').toQuery().options
    }).toArray()
      .then((results) => {
        results.forEach((res) => {
          expect(res).to.not.haveOwnProperty('sports');
          expect(res).to.not.haveOwnProperty('name');
        });
      })
      .catch((err) => { throw err; });
  });
});