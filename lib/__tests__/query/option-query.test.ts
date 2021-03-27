import query from '../..';
import {expect} from 'chai';

describe('option unit tests', () => {
  it('builds "limit" option', () => {
    const expected = {limit: 20};
    const results = [
      query('collection').limit(20).toQuery().options,
      query('collection').raw('limit', 20).toQuery().options,
      query('collection').rawJson({limit: 20}).toQuery().options,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "offset" option', () => {
    const expected = {skip: 10};
    const results = [
      query('collection').offset(10).toQuery().options,
      query('collection').raw('offset', 10).toQuery().options,
      query('collection').rawJson({skip: 10}).toQuery().options,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "select" option', () => {
    const expected = {projection: {name: 1, age: 0}};
    const results = [
      query('collection').select(['name']).select(['age'], false).toQuery()
        .options,
      query('collection')
        .raw('select', ['name'], true)
        .raw('select', ['age'], false)
        .toQuery().options,
      query('collection')
        .rawJson({
          select: {
            name: true,
            age: false,
          },
        })
        .toQuery().options,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('builds "sort" option', () => {
    const expected = {sort: {name: 1, age: -1}};
    const results = [
      query('collection').sort(['name'], 'asc').sort(['age'], 'desc').toQuery()
        .options,
      query('collection')
        .raw('sort', ['name'])
        .raw('sort', ['age'], 'desc')
        .toQuery().options,
      query('collection')
        .rawJson({
          sort: {
            asc: ['name'],
            desc: ['age'],
          },
        })
        .toQuery().options,
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });
});
