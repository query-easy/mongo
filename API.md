## Query Object

A query object can be created by import / require.
```
const users = require('@query-easy/mongo')('users');
```
```
import qe from '@query-easy/mongo';
const users = qe('users');
```

### All APIs except `toQuery` are chainable
```
users.eq(...).neq(...).limit(...);
```

### Equal to
[Back to top](API.md#query-object)
<br/>
Alias: `eq`, `=`
<br/>
API:
```
users.eq('name', 'John').eq('age', 24);

users.raw('name', 'eq', 'john').raw('age', '=', 24);

users.rawJson({
    name: {eq: 'John'},
    age: {eq: 24},
});
```

### Not equal to
[Back to top](API.md#query-object)
<br/>
Alias: `neq`, `<>`, `!=`
<br/>
APIs:
```
users.neq('name', 'John');

users.raw('name', 'ne', 'John');

users.rawJson({
    name: {'!=': 'John'},
});
```

### Greater than
[Back to top](API.md#query-object)
<br/>
Alias: `gt`, `>`
<br/>
API:
```
users.gt('age', 25).gt('height', 173);

users.raw('age', 'gt', 25).raw('height', '>', 173);

users.rawJson({
  age: {'>', 25},
  height: {'gt', 173},
});
```

### Greater than or equal to
[Back to top](API.md#query-object)
<br/>
Alias: `gte`, `>=`
<br/>
API:
```
users.gte('age', 25).gte('height', 173);

users.raw('age', '>=', 25).raw('height', 'gte', 173);

users.rawJson({
  age: {'gte', 25},
  height: {'>=', 173},
});
```

### Less than
[Back to top](API.md#query-object)
<br/>
Alias: `lt`, `<`
<br/>
API:
```
users.lt('age', 25).lt('height', 173);

users.raw('age', 'lt', 25).raw('height', '<', 173);

users.rawJson({
  age: {'lt', 25},
  height: {'<', 173},
});
```

### Less than or equal to
[Back to top](API.md#query-object)
<br/>
Alias: `lte`, `<=`
<br/>
API:
```
users.lte('age', 25).lte('height', 173);

users.raw('age', 'lte', 25).raw('height', '<=', 173);

users.rawJson({
  age: {'lte', 25},
  height: {'<=', 173},
});
```

### In
[Back to top](API.md#query-object)
<br/>
Alias: `in`
<br/>
API:
```
users.in('departments', ['sports', 'faculty', 'chess']);

users.raw('departments', 'in', ['sports', 'faculty', 'chess']);

users.rawJson({
  departments: {in: ['sports', 'faculty', 'chess']},
});
```

### Not in
[Back to top](API.md#query-object)
<br/>
Alias: `nin`, `notin`
<br/>
API:
```
users.nin('departments', ['sports', 'faculty', 'chess']);

users.raw('departments', 'notin', ['sports', 'faculty', 'chess']);

users.rawJson({
  departments: {nin: ['sports', 'faculty', 'chess']},
});
```

### All
[Back to top](API.md#query-object)
<br/>
Alias: `all`
<br/>
API:
```
users.all('departments', ['sports', 'faculty', 'chess']);

users.raw('departments', 'all', ['sports', 'faculty', 'chess']);

users.rawJson({
  departments: {all: ['sports', 'faculty', 'chess']},
});
```

### Array size
[Back to top](API.md#query-object)
<br/>
Alias: `size`
<br/>
API:
```
users.size('departments', 3);

users.raw('departments', 'size', 3);

users.rawJson({
  departments: {size: 3},
});
```

### Exists
[Back to top](API.md#query-object)
<br/>
Alias: `exists`
<br/>
API:
```
// Exists defaults to true
users.exists('name.first').exists('deparment', false);

users.raw('name.first', 'exists', true).raw('deparment', 'exists', false);

users.rawJson({
  'name.first': {exists: true},
  department: {exists: false},
});
```

### Type
[Back to top](API.md#query-object)
<br/>
Alias: `type`
<br/>
API:
```
users.type('address', 'string');

users.raw('address', 'type', 'string');

users.rawJson({
  address: {type: 'string'},
});
```

### Regex
[Back to top](API.md#query-object)
<br/>
Alias: `regex`
<br/>
API:
```
users.regex('name', new RegExp('john', 'i'));

users.raw('name', 'regex', new RegExp('john', 'i'));

users.rawJson({
  name: {regex: new RegExp('john', 'i')},
});
```

### Logical and operator
[Back to top](API.md#query-object)
<br/>
Alias: `and`, `&&`
<br/>
API:
```
users.and((andCB) => {
  andCB.eq('name', 'John').gt('age', 24);
});

users.and([{name:{'=': 'John'}}, {name:{'>': 'John'}}]);

users.rawJson({
  and: [{name:{'eq': 'John'}}, {name:{'>': 'John'}}],
});

```

### Logical or operator
[Back to top](API.md#query-object)
<br/>
Alias: `or`, `||`
<br/>
API:
```
users.or((orCB) => {
  orCB.eq('name', 'John').gt('age', 24);
});

users.or([{name:{'=': 'John'}}, {name:{'>': 'John'}}]);

users.rawJson({
  or: [{name:{'eq': 'John'}}, {name:{'>': 'John'}}],
});

```

### Logical nor operator
[Back to top](API.md#query-object)
<br/>
Alias: `nor`
<br/>
API:
```
users.nor((norCB) => {
  norCB.eq('name', 'John').gt('age', 24);
});

users.nor([{name:{'=': 'John'}}, {name:{'>': 'John'}}]);

users.rawJson({
  nor: [{name:{'eq': 'John'}}, {name:{'>': 'John'}}],
});
```

### Logical not operator
[Back to top](API.md#query-object)
<br/>
Alias: `not`
<br/>
API:
```
users.not('name', new RegExp('john', 'i'));

users.raw('name', 'not', new RegExp('john', 'i'));

users.rawJson({
  name: {not: new RegExp('john', 'i')},
});
```

### Limit
[Back to top](API.md#query-object)
<br/>
Alias: `limit`
<br/>
API:
```
users.limit(10);

users.raw('limit', 10);

users.rawJson({
  limit: 10,
});
```

### Offset
[Back to top](API.md#query-object)
<br/>
Alias: `offset`, `skip`
<br/>
API:
```
users.offset(10);

users.raw('skip', 10);

users.rawJson({
  offset: 10,
});
```

### Raw builders
[Back to top](API.md#query-object)
<br/>
API:
```
users
  .raw('name', '=', 'John')
  .raw('age', 'neq', 24)
  .raw('limit', 10)
  .raw('skip', 20);

users.rawJson({
  name: {eq: 'John'},
  age: {'!=': 24},
  limit: 10,
  offset: 20,
});
```

### Select
[Back to top](API.md#query-object)
<br/>
Alias: `select`
<br/>
API:
```
// Select defaults to true
users.select(['name.first', 'name.last']).select(['_id'], false);

users.raw('select', ['name.first', 'name.last'], true).raw('select', ['_id'], false);

users.rawJson({
  select: {
    'name.first': true,
    'name.last': true,
    '_id': false,
  }
});
```

### Sort
[Back to top](API.md#query-object)
<br/>
Alias: `sort`
<br/>
API:
```
// Sorting order defaults to 'asc'
users.sort(['name.first', 'name.last']).sort(['deparment'], 'desc');

users.raw('sort', ['name.first', 'name.last'], 'asc').raw('sort', ['deparment'], 'desc');

users.rawJson({
  sort: {
    asc: ['name.first', 'name.last'],
    desc: ['department'],
  }
});
```

### To Query
[Back to top](API.md#query-object)
<br/>
API:
```
const dbQuery = users.and((andCB) => {
    andCB.eq('name', 'John').gt('age', 24);
  })
  .limit(10)
  .select(['_id'], false)
  .toQuery();
console.log(dbQuery);
/*
Output:
{
  filter: {
    $and: [{name: {'$eq': 'John'}},{age: {'$gt': 24}}]
  },
  options: {
    limit: 10,
    projection: {_id: 0},
  }
}
*/

```

### Clear
[Back to top](API.md#query-object)
<br/>
API:
```
users.and((andCB) => {
    andCB.eq('name', 'John').gt('age', 24);
  })
  .limit(10)
  .select(['_id'], false);

// Clears query
users.clear();

const dbQuery = users.toQuery();
console.log(dbQuery);
/*
Output:
{
  filter: {},
  options: {}
}
*/
```
