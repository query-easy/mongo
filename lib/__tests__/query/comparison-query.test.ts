import query from '../..';
import {expect} from 'chai';

describe('comparison filter unit tests', () => {
  it('builds "eq" filter', () => {
    const expected = {name: {$eq: 'John'}};
    const results = [
      query('collection').eq('name', 'John').toQuery().filter,
      query('collection').raw('name', '=', 'John').toQuery().filter,
      query('collection')
        .rawJson({name: {eq: 'John'}})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "neq" filter', () => {
    const expected = {name: {$ne: 'John'}};
    const results = [
      query('collection').neq('name', 'John').toQuery().filter,
      query('collection').raw('name', '<>', 'John').toQuery().filter,
      query('collection')
        .rawJson({name: {'!=': 'John'}})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "gt" filter', () => {
    const expected = {age: {$gt: 20}};
    const results = [
      query('collection').gt('age', 20).toQuery().filter,
      query('collection').raw('age', '>', 20).toQuery().filter,
      query('collection')
        .rawJson({age: {gt: 20}})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "gte" filter', () => {
    const expected = {age: {$gte: 20}};
    const results = [
      query('collection').gte('age', 20).toQuery().filter,
      query('collection').raw('age', '>=', 20).toQuery().filter,
      query('collection')
        .rawJson({age: {gte: 20}})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "lt" filter', () => {
    const expected = {age: {$lt: 20}};
    const results = [
      query('collection').lt('age', 20).toQuery().filter,
      query('collection').raw('age', '<', 20).toQuery().filter,
      query('collection')
        .rawJson({age: {lt: 20}})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "lte" filter', () => {
    const expected = {department: {$lte: null}};
    const results = [
      query('collection').lte('department', null).toQuery().filter,
      query('collection').raw('department', '<=', null).toQuery().filter,
      query('collection')
        .rawJson({department: {lte: null}})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "in" filter', () => {
    const expected = {department: {$in: ['sports', 'drama']}};
    const results = [
      query('collection').in('department', ['sports', 'drama']).toQuery()
        .filter,
      query('collection').raw('department', 'in', ['sports', 'drama']).toQuery()
        .filter,
      query('collection')
        .rawJson({department: {in: ['sports', 'drama']}})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "nin" filter', () => {
    const expected = {department: {$nin: ['sports', 'drama']}};
    const results = [
      query('collection').nin('department', ['sports', 'drama']).toQuery()
        .filter,
      query('collection')
        .raw('department', 'nin', ['sports', 'drama'])
        .toQuery().filter,
      query('collection')
        .rawJson({department: {nin: ['sports', 'drama']}})
        .toQuery().filter,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });
});
