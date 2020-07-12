const { expect } = require('chai');
const filter = require('../../../lib/filter/index');

const testData = require('./test-data');

describe('individual - filter', () => {
  it('should throw collection error', () => {
    expect(filter.bind({}, 123)).to.throw();
  });
  it('should build filter object', () => {
    expect(filter.bind({}, testData.collection)).to.not.throw();
  });
});

describe('individual - filter - eq', () => {
  it('should build correct eq filter by arg arr', () => {
    const fil = filter.call({}, testData.collection);
    fil.eq(testData.queries.eq);
    expect(fil.filter).to.eql(testData.result.eq);
  });
  it('should build correct eq filter by multiple args', () => {
    const fil = filter.call({}, testData.collection);
    fil.eq(...testData.queries.eq);
    expect(fil.filter).to.eql(testData.result.eq);
  });
  it('should build correct eq filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('eq', testData.queries.eq);
    expect(fil.filter).to.eql(testData.result.eq);
  });
});

describe('individual - filter - neq', () => {
  it('should build correct neq filter by arg arr', () => {
    const fil = filter.call({}, testData.collection);
    fil.neq(testData.queries.neq);
    expect(fil.filter).to.eql(testData.result.neq);
  });
  it('should build correct neq filter by multiple args', () => {
    const fil = filter.call({}, testData.collection);
    fil.neq(...testData.queries.neq);
    expect(fil.filter).to.eql(testData.result.neq);
  });
  it('should build correct neq filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('neq', testData.queries.neq);
    expect(fil.filter).to.eql(testData.result.neq);
  });
});

describe('individual - filter - lt', () => {
  it('should build correct lt filter by arg arr', () => {
    const fil = filter.call({}, testData.collection);
    fil.lt(testData.queries.lt);
    expect(fil.filter).to.eql(testData.result.lt);
  });
  it('should build correct lt filter by multiple args', () => {
    const fil = filter.call({}, testData.collection);
    fil.lt(...testData.queries.lt);
    expect(fil.filter).to.eql(testData.result.lt);
  });
  it('should build correct lt filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('<', testData.queries.lt);
    expect(fil.filter).to.eql(testData.result.lt);
  });
});

describe('individual - filter - gt', () => {
  it('should build correct gt filter by arg arr', () => {
    const fil = filter.call({}, testData.collection);
    fil.gt(testData.queries.gt);
    expect(fil.filter).to.eql(testData.result.gt);
  });
  it('should build correct gt filter by multiple args', () => {
    const fil = filter.call({}, testData.collection);
    fil.gt(...testData.queries.gt);
    expect(fil.filter).to.eql(testData.result.gt);
  });
  it('should build correct gt filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('>', testData.queries.gt);
    expect(fil.filter).to.eql(testData.result.gt);
  });
});

describe('individual - filter - lte', () => {
  it('should build correct lte filter by arg arr', () => {
    const fil = filter.call({}, testData.collection);
    fil.lte(testData.queries.lte);
    expect(fil.filter).to.eql(testData.result.lte);
  });
  it('should build correct lte filter by multiple args', () => {
    const fil = filter.call({}, testData.collection);
    fil.lte(...testData.queries.lte);
    expect(fil.filter).to.eql(testData.result.lte);
  });
  it('should build correct lte filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('lte', testData.queries.lte);
    expect(fil.filter).to.eql(testData.result.lte);
  });
});

describe('individual - filter - gte', () => {
  it('should build correct gte filter by arg arr', () => {
    const fil = filter.call({}, testData.collection);
    fil.gte(testData.queries.gte);
    expect(fil.filter).to.eql(testData.result.gte);
  });
  it('should build correct gte filter by multiple args', () => {
    const fil = filter.call({}, testData.collection);
    fil.gte(...testData.queries.gte);
    expect(fil.filter).to.eql(testData.result.gte);
  });
  it('should build correct gte filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('gte', testData.queries.gte);
    expect(fil.filter).to.eql(testData.result.gte);
  });
});

describe('individual - filter - regex', () => {
  it('should build correct regex filter by arg arr', () => {
    const fil = filter.call({}, testData.collection);
    fil.regex(testData.queries.regex);
    expect(fil.filter).to.eql(testData.result.regex);
  });
  it('should build correct regex filter by multiple args', () => {
    const fil = filter.call({}, testData.collection);
    fil.regex(...testData.queries.regex);
    expect(fil.filter).to.eql(testData.result.regex);
  });
  it('should build correct regex filter by raw', () => {
    const fil = filter.call({}, testData.collection);
    fil.raw('regex', testData.queries.regex);
    expect(fil.filter).to.eql(testData.result.regex);
  });
});