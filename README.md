# @query-easy/mongo

A query builder for [MongoDB](https://www.mongodb.com/), built to provide a rich and dynamic query building interface.

# Contents

- [Examples](#examples)
- [Working with mongodb and mongoose](#working-with-mongodb-and-mongoose)
- [Full API matrix](#full-api-matrix)
- [Notes](#notes)

## Examples

### Getting Started
```
const qe = require('@query-easy/mongo');
const query = qe('office_collection')
  .eq('character_name', 'Michael Scott')
  .or((cb) => {
    cb
      .in('fav_restaurants', ['chillis', 'hooters'])
      .raw('nin', 'habits', 'manager', 'adult', 'HR')
  })
  .all('hobbies', ['parkour', 'rap'])
  .raws(
    ['regex', 'prison_name', new RegExp('prisonmike', 'i')],
    ['skip', 5]
  )
  .raw('>=', 'age', 96)
  .exists('department', true)
  .raw('sort', 'asc', 'name', 'age')
  .toQuery();

/*
// Output:
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
```
More examples [here]()

### Working with mongodb and mongoose

```
const qe = require('@query-easy/mongo');
const query = qe('office_collection')
  .eq('character_name', 'Michael Scott')
  .or((cb) => {
    cb
      .in('fav_restaurants', ['chillis', 'hooters'])
      .raw('nin', 'habits', 'manager', 'adult', 'HR')
  })
  .all('hobbies', ['parkour', 'rap'])
  .raws(
    ['regex', 'prison_name', new RegExp('prisonmike', 'i')],
    ['skip', 5]
  )
  .raw('>=', 'age', 96)
  .exists('department', true)
  .raw('sort', 'asc', 'name', 'age')
  .toQuery();

// Mongoose Ex.
let filter = query.filter;
let options = query.options;
// Following line is added because mongoose find() does not want projection in options
let projection = query.options.projection;
delete options.projection;

MongooseModel.find(filter, projection, options, (err, docs) => {
  // do some stuff...
})

// MongoDB Ex.
let collection = mongodb().collection('office_collection');
collection.find(
  query.filter,
  query.options
).toArray((err, docs) => {
  // do some stuff...
})
```

### Full API matrix
Refer [API.md](API.md)

### Notes
This is a very young but battle tested repository. All APIs have undergone unit & integration testing with MongoDB server. This repository, in total, has 110+ test cases which cover all functions and their branches. Feel free to [fork](https://github.com/query-easy/mongo) this repo on GitHub.