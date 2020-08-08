const { expect } = require('chai');
const mongodb = require('mongodb');

const testData = require('./test-data');

describe('seed data in mongo server', () => {
  before((done) => {
    mongodb.connect('mongodb://localhost:27017/my_test_db', { useUnifiedTopology: true }, (dbErr, db) => {
      expect(dbErr).to.be.null;
      const collection = db.db().collection('test');
      collection.deleteMany({})
        .then(() => collection.insertMany(testData.data))
        .then(() => done())
        .catch((err) => done(err));
    });
  });
});