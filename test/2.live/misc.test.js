const { expect } = require('chai');
const kindof = require('kindof');
const mongodb = require('mongodb');
const query = require('../../lib/query/index');

describe('it should perform misc tests on server', () => {
  let collection;
  before((done) => {
    mongodb.connect('mongodb://localhost:27017/my_test_db', { useUnifiedTopology: true }, (dbErr, db) => {
      expect(dbErr).to.be.null;
      collection = db.db().collection('test');
      done();
    });
  });
  it('should perform type test', () => {
    collection.find({
      ...query('test').type('address', 'array').toQuery().filter
    }).toArray()
      .then((results) => {
        expect(results.length).to.be.gt(0);
        results.forEach((res) => {
          expect(kindof(res.address)).to.equal('array');
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform exists test', () => {
    collection.find({
      ...query('test').exists('department', true).toQuery().filter
    }).toArray()
      .then((results) => {
        expect(results.length).to.be.gt(0);
        results.forEach((res) => {
          expect(res).to.haveOwnProperty('department');
        });
      })
      .catch((err) => { throw err; });
  });
  it('should perform does not exist test', () => {
    collection.find({
      ...query('test').exists('department', false).toQuery().filter
    }).toArray()
      .then((results) => {
        expect(results.length).to.be.gt(0);
        results.forEach((res) => {
          expect(res).to.not.haveOwnProperty('department');
        });
      })
      .catch((err) => { throw err; });
  });
});