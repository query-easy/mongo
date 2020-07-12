const { expect } = require('chai');
const query = require('../../../lib/query/index');

const testData = require('./test-data');

describe('individual - query', () => {
  it('should throw collection error', () => {
    expect(query.bind({}, 123)).to.throw();
  });
  it('should build filter object', () => {
    expect(query.bind({}, testData.collection)).to.not.throw();
  });
  it('should throw query not matched error', () => {
    expect(query(testData.collection).raw.bind({}, 'x', 'y')).to.throw();
  });
});

describe('individual - query - simple', () => {
  it('should build correct query for jumble #1', () => {
    const qe = query.call({}, testData.collection);
    qe
      .eq(testData.queries.simple.eq)
      .neq(...testData.queries.simple.neq)
      .raw('<', testData.queries.simple.lt)
      .gt(...testData.queries.simple.gt)
      .lte(testData.queries.simple.lte)
      .raw('>=', testData.queries.simple.gte)
      .regex(testData.queries.simple.regex)
      .in(testData.queries.simple.in)
      .nin(...testData.queries.simple.nin)
      .raw('all', testData.queries.simple.all)
      .raw('size', testData.queries.simple.size)
      .limit(testData.queries.simple.limit)
      .raw('offset', testData.queries.simple.offset)
      .sort(testData.queries.simple.sort.asc)
      .sort(...testData.queries.simple.sort.desc)
      .select(testData.queries.simple.select.select)
      .raw('select', testData.queries.simple.select.deselect)
      .exists(testData.queries.simple.exists.exist)
      .exists(...testData.queries.simple.exists.not_exist)
      .type(...testData.queries.simple.type)
      .raw('not', testData.queries.simple.not)
      .and((andCB) => {
        andCB.neq(testData.queries.simple.and.neq);
      })
      .or((orCB) => {
        orCB.size(testData.queries.simple.or.size);
      })
      .raw('nor', (norCB) => {
        norCB.gt(testData.queries.simple.nor.gt);
      });
    expect(qe.toQuery()).to.eql(testData.result.simple);
  });
  it('should build correct query for jumble #2', () => {
    const qe = query.call({}, testData.collection);
    qe
      .sort(...testData.queries.simple.sort.desc)
      .eq(testData.queries.simple.eq)
      .neq(...testData.queries.simple.neq)
      .raw('select', testData.queries.simple.select.deselect)
      .raw('<', testData.queries.simple.lt)
      .gt(...testData.queries.simple.gt)
      .lte(testData.queries.simple.lte)
      .raw('offset', testData.queries.simple.offset)
      .raw('>=', testData.queries.simple.gte)
      .regex(testData.queries.simple.regex)
      .in(testData.queries.simple.in)
      .nin(...testData.queries.simple.nin)
      .raw('all', testData.queries.simple.all)
      .raw('size', testData.queries.simple.size)
      .limit(testData.queries.simple.limit)
      .sort(testData.queries.simple.sort.asc)
      .select(testData.queries.simple.select.select)
      .exists(...testData.queries.simple.exists.not_exist)
      .type(...testData.queries.simple.type)
      .raw('not', testData.queries.simple.not)
      .and((andCB) => {
        andCB.neq(testData.queries.simple.and.neq);
      })
      .or((orCB) => {
        orCB.size(testData.queries.simple.or.size);
      })
      .raw('nor', (norCB) => {
        norCB.gt(testData.queries.simple.nor.gt);
      })
      .exists(testData.queries.simple.exists.exist);
    expect(qe.toQuery()).to.eql(testData.result.simple);
  });
  it('should build correct query by raws', () => {
    const qe = query.call({}, testData.collection);
    qe
      .raws(
        ['eq', testData.queries.simple.eq],
        ['neq', testData.queries.simple.neq],
        ['<', testData.queries.simple.lt],
        ['>', testData.queries.simple.gt],
        ['<=', testData.queries.simple.lte],
        ['gte', testData.queries.simple.gte],
        ['regex', testData.queries.simple.regex],
        ['in', testData.queries.simple.in],
        ['nin', testData.queries.simple.nin],
        ['all', testData.queries.simple.all],
        ['size', testData.queries.simple.size],
        ['exists', testData.queries.simple.exists.exist],
        ['exists', testData.queries.simple.exists.not_exist],
        ['type', testData.queries.simple.type],
        ['not', testData.queries.simple.not],
        ['and', (andCB) => {
          andCB.neq(testData.queries.simple.and.neq);
        }],
        ['or', (orCB) => {
          orCB.size(testData.queries.simple.or.size);
        }],
        ['nor', (norCB) => {
          norCB.gt(testData.queries.simple.nor.gt);
        }],
        ['limit', testData.queries.simple.limit],
        ['offset', testData.queries.simple.offset],
        ['sort', testData.queries.simple.sort.asc],
        ['sort', testData.queries.simple.sort.desc],
        ['select', testData.queries.simple.select.select],
        ['select', testData.queries.simple.select.deselect]
      );
    expect(qe.toQuery()).to.eql(testData.result.simple);
  });
});
