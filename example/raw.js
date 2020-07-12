const qe = require('../lib');

let query = qe('office_collection')
  .raws(
    ['eq', 'character_name', 'Michael Scott'],
    ['notin', 'habits', 'manager', 'adult', 'HR'],
    ['select', true, 'name', 'age', 'address'],
    ['select', false, '_id'],
    ['>', 'age', 96],
    ['skip', 9]
  )
  .toQuery();

/*

query = {
  filter: {
    character_name: 'Michael Scott',
    habits: { '$nin': ['manager', 'adult', 'HR'] },
    age: { '$gt': 96 }
  },
  options: {
    projection: { name: 1, age: 1, address: 1, _id: 0 },
    skip: 9
  }
}

*/

console.log(query);
