const { expect } = require('chai');
const filter = require('../../../lib/filter/index');

const testData = require('./test-data');

describe('individual - filter - exist', () => {
  it('should build correct exist filter by arg arr', () => {
    const fil = filter.call({}, testData.collection);
    fil.exists(testData.queries.exists.exist);
    expect(fil.filter).to.eql(testData.result.exists.exist);
  });
  it('should build correct exist filter by multiple args', () => {
    const fil = filter.call({}, testData.collection);
    fil.exists(...testData.queries.exists.exist);
    expect(fil.filter).to.eql(testData.result.exists.exist);
  });
  it('should build correct exist filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('exists', testData.queries.exists.exist);
    expect(fil.filter).to.eql(testData.result.exists.exist);
  });
  it('should build correct not exist filter by arg arr', () => {
    const fil = filter.call({}, testData.collection);
    fil.exists(testData.queries.exists.not_exist);
    expect(fil.filter).to.eql(testData.result.exists.not_exist);
  });
  it('should build correct not exist filter by multiple args', () => {
    const fil = filter.call({}, testData.collection);
    fil.exists(...testData.queries.exists.not_exist);
    expect(fil.filter).to.eql(testData.result.exists.not_exist);
  });
  it('should build correct not exist filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('exists', testData.queries.exists.not_exist);
    expect(fil.filter).to.eql(testData.result.exists.not_exist);
  });
});

describe('individual - filter - type', () => {
  it('should build correct type filter by arg arr', () => {
    const fil = filter.call({}, testData.collection);
    fil.type(testData.queries.type);
    expect(fil.filter).to.eql(testData.result.type);
  });
  it('should build correct type filter by multiple args', () => {
    const fil = filter.call({}, testData.collection);
    fil.type(...testData.queries.type);
    expect(fil.filter).to.eql(testData.result.type);
  });
  it('should build correct type filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('type', testData.queries.type);
    expect(fil.filter).to.eql(testData.result.type);
  });
});
