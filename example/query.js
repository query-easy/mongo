const qe = require('../lib');

let query = qe('office_collection')
  .eq('character_name', 'Michael Scott')
  .or((cb) => {
    cb
      .in('fav_restaurants', ['chillis', 'hooters'])
      .raw('nin', 'habits', 'manager', 'adult', 'HR')
  })
  .all('hobbies', ['parkour', 'rap'])
  .regex('prison_name', new RegExp('prisonmike', 'i'))
  .offset(5)
  .raw('>=', 'age', 96)
  .exists('department', true)
  .raw('sort', 'asc', 'name', 'age')
  .toQuery();

/*

query = {
  filter: {
    character_name: 'Michael Scott',
    $or: [
      { fav_restaurants: { '$in': ['chillis', 'hooters'] } },
      { habits: { '$nin': ['manager', 'adult', 'HR'] } }
    ]
    hobbies: { '$all': ['parkour', 'rap'] },
    prison_name: { '$regex': /prisonmike/i },
    age: { '$gte': 96 },
    department: { '$exists': true }
  },
  options: {
    skip: 5, sort: { name: 1, age: 1 }
  }
}

*/

console.log(query);
