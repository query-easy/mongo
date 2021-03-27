import query from '../..';
import {expect} from 'chai';

describe('logical filter unit tests', () => {
  it('builds "and" filter', () => {
    const expected = {
      $and: [{name: {$ne: 'John'}}, {age: {$gt: 20}}],
    };
    const results = [
      query('collection')
        .and(f => {
          f.neq('name', 'John').gt('age', 20);
        })
        .toQuery().filter,
      query('collection')
        .and([{name: {'!=': 'John'}}, {age: {'>': 20}}])
        .toQuery().filter,
      query('collection')
        .rawJson({and: [{name: {'!=': 'John'}}, {age: {'>': 20}}]})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "or" filter', () => {
    const expected = {
      $or: [{name: {$gt: null}}, {age: {$lt: 50}}],
    };
    const results = [
      query('collection')
        .or(f => {
          f.gt('name', null).lt('age', 50);
        })
        .toQuery().filter,
      query('collection')
        .or([{name: {'>': null}}, {age: {'<': 50}}])
        .toQuery().filter,
      query('collection')
        .rawJson({or: [{name: {'>': null}}, {age: {'<': 50}}]})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "nor" filter', () => {
    const expected = {
      $nor: [{name: {$ne: 'John'}}, {age: {$gt: 20}}],
    };
    const results = [
      query('collection')
        .nor(f => {
          f.neq('name', 'John').gt('age', 20);
        })
        .toQuery().filter,
      query('collection')
        .nor([{name: {'!=': 'John'}}, {age: {'>': 20}}])
        .toQuery().filter,
      query('collection')
        .rawJson({nor: [{name: {'!=': 'John'}}, {age: {'>': 20}}]})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "not" filter', () => {
    const expected = {name: {$not: new RegExp('john', 'i')}};
    const results = [
      query('collection').not('name', new RegExp('john', 'i')).toQuery().filter,
      query('collection').raw('name', 'not', new RegExp('john', 'i')).toQuery()
        .filter,
      query('collection')
        .rawJson({name: {not: new RegExp('john', 'i')}})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });
});
