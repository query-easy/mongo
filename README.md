# @query-easy/mongo
[![npm version](https://badge.fury.io/js/%40query-easy%2Fmongo.svg)](https://badge.fury.io/js/%40query-easy%2Fmongo)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/query-easy/mongo.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/query-easy/mongo/context:javascript)
[![Build Status](https://travis-ci.com/query-easy/mongo.svg?branch=master)](https://travis-ci.com/query-easy/mongo)
[![Coverage Status](https://coveralls.io/repos/github/query-easy/mongo/badge.svg?branch=master)](https://coveralls.io/github/query-easy/mongo?branch=master)
[![dependencies Status](https://david-dm.org/query-easy/mongo/status.svg)](https://david-dm.org/query-easy/mongo)
[![devDependencies Status](https://david-dm.org/query-easy/mongo/dev-status.svg)](https://david-dm.org/query-easy/mongo?type=dev)

A query builder for [MongoDB](https://www.mongodb.com/), built to provide a rich and dynamic query building interface.

# Contents

- [Examples](#examples)
- [Working with mongodb and mongoose](#working-with-mongodb-and-mongoose)
- [Full API matrix](#full-api-matrix)

## Examples

### Getting Started
```
const qe = require('@query-easy/mongo');
const query = qe('office_collection')
  .eq('character_name', 'Michael Scott')
  .or((cb) => {
    cb.in('fav_restaurants', ['chillis', 'benihana'])
  })
  .all('hobbies', ['parkour', 'rap'])
  .regex('prison_name', new RegExp('prisonmike', 'i'))
  .offset(5)
  .raw('age', '>=', 96)
  .exists('department', true)
  .raw('sort', ['name', 'age'])
  .toQuery();

/*
query = {
  filter: {
    character_name: 'Michael Scott',
    $or: [
      {fav_restaurants: {'$in': ['chillis', 'benihana']}},
    ]
    hobbies: {'$all': ['parkour', 'rap']},
    prison_name: {'$regex': /prisonmike/i},
    age: {'$gte': 96},
    department: {'$exists': true}
  },
  options: {
    skip: 5, sort: {name: 1, age: 1}
  }
}
*/
```
More examples [here](example)

### Working with mongodb and mongoose

```
const qe = require('@query-easy/mongo');
const query = qe('office_collection')
  .eq('character_name', 'Michael Scott')
  .or((cb) => {
    cb.in('fav_restaurants', ['chillis', 'benihana'])
  })
  .all('hobbies', ['parkour', 'rap'])
  .regex('prison_name', new RegExp('prisonmike', 'i'))
  .offset(5)
  .raw('age', '>=', 96)
  .exists('department', true)
  .raw('sort', ['name', 'age'])
  .toQuery();

// MongoDB Ex.
let collection = mongodb().collection('office_collection');
collection.find(
  query.filter,
  query.options
).toArray((err, docs) => {
  // do some stuff...
})

// Mongoose Ex.
let filter = query.filter;
let options = query.options;

// Following line is added because mongoose find() does not want projection in options
let projection = query.options.projection;
delete options.projection;

MongooseModel.find(filter, projection, options, (err, docs) => {
  // do some stuff...
})
```

### Full API matrix
Refer [API.md](API.md)
