import query from '../..';
import {expect} from 'chai';

describe('array filter unit tests', () => {
  it('builds "all" filter', () => {
    const expected = {department: {$all: ['sports', 'drama']}};
    const results = [
      query('collection').all('department', ['sports', 'drama']).toQuery()
        .filter,
      query('collection')
        .raw('department', 'all', ['sports', 'drama'])
        .toQuery().filter,
      query('collection')
        .rawJson({department: {all: ['sports', 'drama']}})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "size" filter', () => {
    const expected = {department: {$size: 10}};
    const results = [
      query('collection').size('department', 10).toQuery().filter,
      query('collection').raw('department', 'size', 10).toQuery().filter,
      query('collection')
        .rawJson({department: {size: 10}})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });
});
