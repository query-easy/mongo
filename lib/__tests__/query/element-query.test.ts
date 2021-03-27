import query from '../..';
import {expect} from 'chai';

describe('element filter unit tests', () => {
  it('builds "exists" filter', () => {
    const expected = {'name.last': {$exists: true}};
    const results = [
      query('collection').exists('name.last').toQuery().filter,
      query('collection').raw('name.last', 'exists', true).toQuery().filter,
      query('collection')
        .rawJson({'name.last': {exists: true}})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "type" filter', () => {
    const expected = {department: {$type: 'array'}};
    const results = [
      query('collection').type('department', 'array').toQuery().filter,
      query('collection').raw('department', 'type', 'array').toQuery().filter,
      query('collection')
        .rawJson({department: {type: 'array'}})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });
});
