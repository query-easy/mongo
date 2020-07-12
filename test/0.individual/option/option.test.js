const { expect } = require('chai');
const option = require('../../../lib/option/index');

const testData = require('./test-data');

describe('individual - options', () => {
  it('should throw collection error', () => {
    expect(option.bind({}, 123)).to.throw();
  });
  it('should build option object', () => {
    expect(option.bind({}, testData.collection)).to.not.throw();
  });
});

describe('individual - options - limit', () => {
  it('should build correct limit condition', () => {
    const opt = option.call({}, testData.collection);
    opt.limit(testData.queries.limit);
    expect(opt.option).to.eql(testData.result.limit);
  });
  it('should build correct limit condition by raw', () => {
    const opt = option.call({}, testData.collection);
    opt.raw('limit', testData.queries.limit);
    expect(opt.option).to.eql(testData.result.limit);
  });
});

describe('individual - options - offset', () => {
  it('should build correct offset condition', () => {
    const opt = option.call({}, testData.collection);
    opt.offset(testData.queries.offset);
    expect(opt.option).to.eql(testData.result.offset);
  });
  it('should build correct offset condition by raw', () => {
    const opt = option.call({}, testData.collection);
    opt.raw('offset', testData.queries.offset);
    expect(opt.option).to.eql(testData.result.offset);
  });
});

describe('individual - options - sort', () => {
  it('should throw error for incorrect sort value', () => {
    const opt = option.call({}, testData.collection);
    opt.sort(testData.queries.sort.asc);
    expect(opt.sort.bind({}, 'notascdesc', ...testData.queries.sort.asc)).to.throw();
  });
  it('should build correct asc sort condition by arg arr', () => {
    const opt = option.call({}, testData.collection);
    opt.sort(testData.queries.sort.asc);
    expect(opt.option).to.eql(testData.result.sort.asc);
  });
  it('should build correct asc sort condition by multiple args', () => {
    const opt = option.call({}, testData.collection);
    opt.sort(...testData.queries.sort.asc);
    expect(opt.option).to.eql(testData.result.sort.asc);
  });
  it('should build correct asc sort condition by raw', () => {
    const opt = option.call({}, testData.collection);
    opt.raw('sort', testData.queries.sort.asc);
    expect(opt.option).to.eql(testData.result.sort.asc);
  });
  it('should build correct desc sort condition by arg arr', () => {
    const opt = option.call({}, testData.collection);
    opt.sort(testData.queries.sort.desc);
    expect(opt.option).to.eql(testData.result.sort.desc);
  });
  it('should build correct desc sort condition by multiple args', () => {
    const opt = option.call({}, testData.collection);
    opt.sort(...testData.queries.sort.desc);
    expect(opt.option).to.eql(testData.result.sort.desc);
  });
  it('should build correct desc sort condition by raw', () => {
    const opt = option.call({}, testData.collection);
    opt.raw('sort', testData.queries.sort.desc);
    expect(opt.option).to.eql(testData.result.sort.desc);
  });
});

describe('individual - options - select', () => {
  it('should build correct select condition by arg arr', () => {
    const opt = option.call({}, testData.collection);
    opt.select(testData.queries.select.select);
    expect(opt.option).to.eql(testData.result.select.select);
  });
  it('should build correct select condition by multiple args', () => {
    const opt = option.call({}, testData.collection);
    opt.select(...testData.queries.select.select);
    expect(opt.option).to.eql(testData.result.select.select);
  });
  it('should build correct select condition by raw', () => {
    const opt = option.call({}, testData.collection);
    opt.raw('select', testData.queries.select.select);
    expect(opt.option).to.eql(testData.result.select.select);
  });
  it('should build correct deselect condition by arg arr', () => {
    const opt = option.call({}, testData.collection);
    opt.select(testData.queries.select.deselect);
    expect(opt.option).to.eql(testData.result.select.deselect);
  });
  it('should build correct deselect condition by multiple args', () => {
    const opt = option.call({}, testData.collection);
    opt.select(...testData.queries.select.deselect);
    expect(opt.option).to.eql(testData.result.select.deselect);
  });
  it('should build correct deselect condition by raw', () => {
    const opt = option.call({}, testData.collection);
    opt.raw('select', testData.queries.select.deselect);
    expect(opt.option).to.eql(testData.result.select.deselect);
  });
});

describe('individual - options - combined', () => {
  it('should build correct options', () => {
    const opt = option.call({}, testData.collection);
    opt
      .limit(testData.queries.limit)
      .raw('offset', testData.queries.offset)
      .sort(testData.queries.sort.asc)
      .sort(...testData.queries.sort.desc)
      .select(testData.queries.select.select)
      .raw('select', testData.queries.select.deselect);
    expect(opt.option).to.eql(testData.result.combined);
  });
  it('should build correct options by raws', () => {
    const opt = option.call({}, testData.collection);
    opt
      .raws(
        ['limit', testData.queries.limit],
        ['offset', testData.queries.offset],
        ['sort', testData.queries.sort.asc],
        ['sort', testData.queries.sort.desc],
        ['select', testData.queries.select.select],
        ['select', testData.queries.select.deselect]
      );
    expect(opt.option).to.eql(testData.result.combined);
  });
});