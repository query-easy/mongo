const { expect } = require('chai');
const filter = require('../../../lib/filter/index');

const testData = require('./test-data');

describe('individual - filter - in', () => {
  it('should build correct in filter by arg arr', () => {
    const fil = filter.call({}, testData.collection);
    fil.in(testData.queries.in);
    expect(fil.filter).to.eql(testData.result.in);
  });
  it('should build correct in filter by multiple args', () => {
    const fil = filter.call({}, testData.collection);
    fil.in(...testData.queries.in);
    expect(fil.filter).to.eql(testData.result.in);
  });
  it('should build correct in filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('in', testData.queries.in);
    expect(fil.filter).to.eql(testData.result.in);
  });
});

describe('individual - filter - nin', () => {
  it('should build correct nin filter by arg arr', () => {
    const fil = filter.call({}, testData.collection);
    fil.nin(testData.queries.nin);
    expect(fil.filter).to.eql(testData.result.nin);
  });
  it('should build correct nin filter by multiple args', () => {
    const fil = filter.call({}, testData.collection);
    fil.nin(...testData.queries.nin);
    expect(fil.filter).to.eql(testData.result.nin);
  });
  it('should build correct nin filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('notin', testData.queries.nin);
    expect(fil.filter).to.eql(testData.result.nin);
  });
});

describe('individual - filter - all', () => {
  it('should build correct all filter by arg arr', () => {
    const fil = filter.call({}, testData.collection);
    fil.all(testData.queries.all);
    expect(fil.filter).to.eql(testData.result.all);
  });
  it('should build correct all filter by multiple args', () => {
    const fil = filter.call({}, testData.collection);
    fil.all(...testData.queries.all);
    expect(fil.filter).to.eql(testData.result.all);
  });
  it('should build correct all filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('all', testData.queries.all);
    expect(fil.filter).to.eql(testData.result.all);
  });
});

describe('individual - filter - size', () => {
  it('should build correct size filter by arg arr', () => {
    const fil = filter.call({}, testData.collection);
    fil.size(testData.queries.size);
    expect(fil.filter).to.eql(testData.result.size);
  });
  it('should build correct size filter by multiple args', () => {
    const fil = filter.call({}, testData.collection);
    fil.size(...testData.queries.size);
    expect(fil.filter).to.eql(testData.result.size);
  });
  it('should build correct size filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('size', testData.queries.size);
    expect(fil.filter).to.eql(testData.result.size);
  });
});
