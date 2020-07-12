const { expect } = require('chai');
const filter = require('../../../lib/filter/index');

const testData = require('./test-data');

describe('individual - filter - not', () => {
  it('should build correct not filter', () => {
    const fil = filter.call({}, testData.collection);
    fil.not(testData.queries.not);
    expect(fil.filter).to.eql(testData.result.not);
  });
  it('should build correct not filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('not', testData.queries.not);
    expect(fil.filter).to.eql(testData.result.not);
  });
});

describe('individual - filter - and', () => {
  it('should build correct and filter', () => {
    const fil = filter.call({}, testData.collection);
    fil.and((andCB) => {
      andCB.neq(testData.queries.and.neq);
    });
    expect(fil.filter).to.eql(testData.result.and);
  });
  it('should build correct and filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('and', (andCB) => {
      andCB.raw('!=', testData.queries.and.neq);
    });
    expect(fil.filter).to.eql(testData.result.and);
  });
});

describe('individual - filter - or', () => {
  it('should build correct or filter', () => {
    const fil = filter.call({}, testData.collection);
    fil.or((orCB) => {
      orCB.size(testData.queries.or.size);
    });
    expect(fil.filter).to.eql(testData.result.or);
  });
  it('should build correct or filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('or', (orCB) => {
      orCB.size(testData.queries.or.size);
    });
    expect(fil.filter).to.eql(testData.result.or);
  });
});

describe('individual - filter - nor', () => {
  it('should build correct nor filter', () => {
    const fil = filter.call({}, testData.collection);
    fil.nor((norCB) => {
      norCB.gt(testData.queries.nor.gt);
    });
    expect(fil.filter).to.eql(testData.result.nor);
  });
  it('should build correct nor filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('nor', (norCB) => {
      norCB.gt(testData.queries.nor.gt);
    });
    expect(fil.filter).to.eql(testData.result.nor);
  });
});
