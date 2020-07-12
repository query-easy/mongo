const { expect } = require('chai');
const query = require('../../../lib/query/index');

const testData = require('./test-data');

describe('individual - query - random', () => {
  it('should compile a highly nested query', () => {
    const qe = query.call({}, testData.collection);
    const q = qe
      .and((andCB) => {
        andCB
          .eq(testData.queries.random.and.eq)
          .exists(testData.queries.random.and.exists)
          .or((orCB) => {
            orCB
              .in(testData.queries.random.and.or.in)
              .all(testData.queries.random.and.or.all)
              .nin(testData.queries.random.and.or.nin)
              .gte(testData.queries.random.and.or.gte)
              .lte(testData.queries.random.and.or.lte)
              .lt(testData.queries.random.and.or.lt)
              .regex(testData.queries.random.and.or.regex);
          })
          .type(testData.queries.random.and.type)
          .nor((norCB) => {
            norCB.not(testData.queries.random.and.nor.not);
          });
      })
      .toQuery();
    expect(q).to.be.eql(testData.result.random);
  });
});