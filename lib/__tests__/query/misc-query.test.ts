import query from '../..';
import {expect} from 'chai';

describe('misc filter unit tests', () => {
  it('builds a combined filter', () => {
    const expected = {
      filter: {
        name: {$gt: null},
        'name.middle': {$exists: false},
        department: {$all: ['sports', 'drama']},
        age: {$gte: 20, $lte: 40},
        $and: [],
      },
      options: {
        limit: 10,
        projection: {name: 1, age: 0},
      },
    };
    const results = [
      query('collection')
        .gt('name', null)
        .exists('name.middle', false)
        .all('department', ['sports', 'drama'])
        .gte('age', 20)
        .lte('age', 40)
        .limit(10)
        .select(['name'])
        .raw('select', ['age'], false)
        .and(f => {
          f.eq('day', 'Monday').clear();
        })
        .toQuery(),
      query('collection')
        .raw('name', '>', null)
        .exists('name.middle', false)
        .rawJson({department: {all: ['sports', 'drama']}})
        .raw('age', '>=', 20)
        .lte('age', 40)
        .rawJson({limit: 10})
        .select(['name'], true)
        .raw('select', ['age'], false)
        .and([])
        .toQuery(),
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('clears filter - 1', () => {
    const expected = {filter: {}, options: {}};
    const results = [
      query('collection')
        .gt('name', null)
        .exists('name.middle', false)
        .all('department', ['sports', 'drama'])
        .gte('age', 20)
        .lte('age', 40)
        .limit(10)
        .clear()
        .toQuery(),
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });

  it('clears filter - 2', () => {
    const expected = {filter: {name: {$eq: 'John'}}, options: {skip: 10}};
    const results = [
      query('collection')
        .gt('name', null)
        .exists('name.middle', false)
        .all('department', ['sports', 'drama'])
        .gte('age', 20)
        .lte('age', 40)
        .clear()
        .eq('name', 'John')
        .offset(10)
        .toQuery(),
    ];
    expect(results).to.eql(Array(results.length).fill(expected));
  });
});
