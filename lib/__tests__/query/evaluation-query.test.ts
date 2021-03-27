import query from '../..';
import {expect} from 'chai';

describe('evalutaion filter unit tests', () => {
  it('builds "regex" filter', () => {
    const expected = {name: {$regex: new RegExp('john', 'i')}};
    const results = [
      query('collection').regex('name', new RegExp('john', 'i')).toQuery()
        .filter,
      query('collection')
        .raw('name', 'regex', new RegExp('john', 'i'))
        .toQuery().filter,
      query('collection')
        .rawJson({name: {regex: new RegExp('john', 'i')}})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });
});
