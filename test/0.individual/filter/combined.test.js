const { expect } = require('chai');
const filter = require('../../../lib/filter/index');

const testData = require('./test-data');

describe('individual - filter - combined', () => {
  it('should build correct filter', () => {
    const fil = filter.call({}, testData.collection);
    fil
      .eq(testData.queries.eq)
      .neq(...testData.queries.neq)
      .raw('<', testData.queries.lt)
      .gt(...testData.queries.gt)
      .lte(testData.queries.lte)
      .raw('>=', testData.queries.gte)
      .regex(testData.queries.regex)
      .in(testData.queries.in)
      .nin(...testData.queries.nin)
      .raw('all', testData.queries.all)
      .raw('size', testData.queries.size)
      .exists(testData.queries.exists.exist)
      .exists(...testData.queries.exists.not_exist)
      .type(...testData.queries.type)
      .raw('not', testData.queries.not)
      .and((andCB) => {
        andCB.neq(testData.queries.and.neq);
      })
      .or((orCB) => {
        orCB.size(testData.queries.or.size);
      })
      .raw('nor', (norCB) => {
        norCB.gt(testData.queries.nor.gt);
      });
    expect(fil.filter).to.eql(testData.result.combined);
  });
  it('should build correct filter by raws', () => {
    const fil = filter.call({}, testData.collection);
    fil
      .raws(
        ['eq', testData.queries.eq],
        ['neq', testData.queries.neq],
        ['<', testData.queries.lt],
        ['>', testData.queries.gt],
        ['<=', testData.queries.lte],
        ['gte', testData.queries.gte],
        ['regex', testData.queries.regex],
        ['in', testData.queries.in],
        ['nin', testData.queries.nin],
        ['all', testData.queries.all],
        ['size', testData.queries.size],
        ['exists', testData.queries.exists.exist],
        ['exists', testData.queries.exists.not_exist],
        ['type', testData.queries.type],
        ['not', testData.queries.not],
        ['and', (andCB) => {
          andCB.neq(testData.queries.and.neq);
        }],
        ['or', (orCB) => {
          orCB.size(testData.queries.or.size);
        }],
        ['nor', (norCB) => {
          norCB.gt(testData.queries.nor.gt);
        }]
      );
    expect(fil.filter).to.eql(testData.result.combined);
  });
});