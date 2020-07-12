## Query Interface

A query interface can be created by import / require.
```
const qe = require('@query-easy/mongo')('collection_name');
```
`qe` object provides access to all APIs of [Filter Interface](API.md#filter-interface) and [Option Interface](API.md#option-interface).

### Raw builders
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
`raw` & `raws` on `qe` object handle raw builders of both [filter](API.md#raw-builders-1) & [option](API.md#raw-builders-2) interface
API:
```
qe.raw('limit', ...limit args ).raw('neq', ...neq args );
// is equivalent to
qe.raws(
  ['limit', ...limit args ],
  ['neq', ...neq args ]
)
```

### To Mongo query
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
API:
```
qe.eq( ...eq args ).limit( ...limit args )
const query = qe.toQuery();

console.log(query)
// Outputs
//  {
//    filter: // Mongo filter object
//    options: // Mongo options object
//  }

```

## Filter Interface

### Equal to
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: eq, =
<br />
API:
```
qe.eq('name', 'John').eq('age', 24)
// is equivalent to
qe.raw('eq', 'name', 'john').raw('=', 'age', 24)
// is equivalent to
qe.raws(
  ['eq', 'name', 'john'],
  ['=', 'age', 24]
)
```

### Not equal to
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: neq, <>, !=
<br />
API:
```
qe.neq('name', 'John').neq('age', 24)
// is equivalent to
qe.raw('neq', 'name', 'john').raw('!=', 'age', 24)
// is equivalent to
qe.raws(
  ['<>', 'name', 'john'],
  ['!=', 'age', 24]
)
```

### Less than
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: lt, <
<br />
API:
```
qe.lt('age', 25).lt('height', 173)
// is equivalent to
qe.raw('lt', 'age', 25).raw('<', 'height', 173)
// is equivalent to
qe.raws(
  ['lt', 'age', 25],
  ['<', 'age', 173]
)
```

### Greater than
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: gt, >
<br />
API:
```
qe.gt('age', 23).gt('height', 171)
// is equivalent to
qe.raw('gt', 'age', 23).raw('>', 'height', 171)
// is equivalent to
qe.raws(
  ['gt', 'age', 23],
  ['>', 'age', 171]
)
```

### Less than or equal to
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: lte, <=
<br />
API:
```
qe.lte('age', 24).lte('height', 172)
// is equivalent to
qe.raw('lte', 'age', 24).raw('<=', 'height', 172)
// is equivalent to
qe.raws(
  ['lte', 'age', 24],
  ['<=', 'age', 172]
)
```

### Greater than or equal to
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: gte, >=
<br />
API:
```
qe.gte('age', 23).gte('height', 171)
// is equivalent to
qe.raw('gte', 'age', 23).raw('>=', 'height', 171)
// is equivalent to
qe.raws(
  ['gte', 'age', 23],
  ['>=', 'age', 171]
)
```

### Regex
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: regex
<br />
API:
```
qe.regex('name', new RegExp('john', 'i'))
// is equivalent to
qe.raw('regex', 'name', new RegExp('john', 'i'))
// is equivalent to
qe.raws(
  ['regex', 'name', new RegExp('john', 'i')]
)
```

### Exists
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: exists
<br />
API:
```
qe.exists('name.first', true).exists('deparment', false)
// is equivalent to
qe.raw('exists', 'name.first', true).raw('exists', 'deparment', false)
// is equivalent to
qe.raws(
  ['exists', 'name.first', true],
  ['exists', 'deparment', false]
)
```

### Type
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: type
<br />
API:
```
qe.type('address', 'string')
// is equivalent to
qe.raw('type', 'address', 'string')
// is equivalent to
qe.raws(
  ['type', 'address', 'string']
)
```

### In
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: in
<br />
API:
```
qe.in('departments', ['sports', 'faculty', 'chess'])
// is equivalent to
qe.raw('in', ['departments', ['sports', 'faculty', 'chess']])
// is equivalent to
qe.raws(
  ['in', ['departments', 'sports', 'faculty', 'chess']]
)
```

### Not in
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: nin, notin
<br />
API:
```
qe.nin('departments', ['sports', 'faculty', 'chess'])
// is equivalent to
qe.raw('notin', ['departments', ['sports', 'faculty', 'chess']])
// is equivalent to
qe.raws(
  ['nin', ['departments', 'sports', 'faculty', 'chess']]
)
```

### All
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: all
<br />
API:
```
qe.all('departments', ['sports', 'faculty', 'chess'])
// is equivalent to
qe.raw('all', 'departments', ['sports', 'faculty', 'chess'])
// is equivalent to
qe.raws(
  ['all', ['departments', ['sports', 'faculty', 'chess']]]
)
```

### Array size
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: size
<br />
API:
```
qe.size('departments', 3)
// is equivalent to
qe.raw('size', 'departments', 3)
// is equivalent to
qe.raws(
  ['size', ['departments', 3]]
)
```

### Logical not operator
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: not
<br />
API:
```
qe.not('name', new RegExp('john', 'i'))
// is equivalent to
qe.raw('not', 'name', new RegExp('john', 'i'))
// is equivalent to
qe.raws(
  ['not', ['name', new RegExp('john', 'i')]]
)
```

### Logical and operator
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: and, &&
<br />
API:
```
qe.and((andCB) => { andCB.raws(['eq', 'name', 'John'], ['eq', 'age', 24]) })
// is equivalent to
qe.raw('and', (andCB) => { andCB.raws(['eq', 'name', 'John'], ['eq', 'age', 24]) })
// is equivalent to
qe.raws(
  ['&&', (andCB) => { andCB.raws(['eq', 'name', 'John'], ['eq', 'age', 24]) }]
)
// Note: andCB only provides filter interface
```

### Logical or operator
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: or, ||
<br />
API:
```
qe.or((orCB) => { orCB.raws(['eq', 'name', 'John'], ['eq', 'age', 24]) })
// is equivalent to
qe.raw('or', (orCB) => { orCB.raws(['eq', 'name', 'John'], ['eq', 'age', 24]) })
// is equivalent to
qe.raws(
  ['||', (orCB) => { orCB.raws(['eq', 'name', 'John'], ['eq', 'age', 24]) }]
)
// Note: orCB only provides filter interface
```

### Logical nor operator
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: nor
<br />
API:
```
qe.nor((norCB) => { norCB.raws(['eq', 'name', 'John'], ['eq', 'age', 24]) })
// is equivalent to
qe.raw('nor', (norCB) => { norCB.raws(['eq', 'name', 'John'], ['eq', 'age', 24]) })
// is equivalent to
qe.raws(
  ['nor', (norCB) => { norCB.raws(['eq', 'name', 'John'], ['eq', 'age', 24]) }]
)
// Note: norCB only provides filter interface
```

### Raw builders
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
API:
```
qe.raw('eq', ...equals args ).raw('!=', ...neq args );
// is equivalent to
qe.raws(
  ['eq', ...eq args ],
  ['!=', ...neq args ]
)
```

## Option Interface

### Limit
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: limit
<br />
API:
```
qe.limit(10)
// is equivalent to
qe.raw('limit', 10)
// is equivalent to
qe.raws(
  ['limit', 10]
)
```

### Offset
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: offset, skip
<br />
API:
```
qe.offset(15)
// is equivalent to
qe.raw('offset', 15)
// is equivalent to
qe.raws(
  ['skip', 15]
)
```

### Sort
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: sort
<br />
API:
```
qe.sort('asc', ['name.first', 'name.last']).sort('desc', 'deparment')
// is equivalent to
qe.raw('sort', 'asc', 'name.first', 'name.last').raw('sort', 'desc', 'deparment')
// is equivalent to
qe.raws(
  ['sort', ['asc', 'name.first', 'name.last']],
  ['sort', 'desc', 'deparment']
)
```

### Select
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
Alias: select
<br />
API:
```
qe.select(true, ['name.first', 'name.last']).select(false, '_id')
// is equivalent to
qe.raw('select', true, 'name.first', 'name.last').raw('select', false, '_id')
// is equivalent to
qe.raws(
  ['select', [true, 'name.first', 'name.last']],
  ['select', false, '_id']
)
```

### Raw builders
[Back to top](API.md#query-interface) [Filter Interface](API.md#filter-interface) [Option Interface](API.md#option-interface) <br />
API:
```
qe.raw('limit', ...limit args ).raw('skip', ...offset args );
// is equivalent to
qe.raws(
  ['limit', ...limit args ],
  ['offset', ...offset args ]
)
```