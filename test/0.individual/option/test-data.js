const collection = 'test';

const queries = {
  limit: 10,
  offset: 20,
  sort: {
    asc: ['asc', 'field1', 'field2'],
    desc: ['desc', 'field3', 'field4']
  },
  select: {
    select: [true, 'field1', 'field2'],
    deselect: [false, 'field3', 'field4']
  }
};

const result = {
  limit: { limit: queries.limit },
  offset: { skip: queries.offset },
  sort: {
    asc: { sort: { field1: 1, field2: 1 } },
    desc: { sort: { field3: -1, field4: -1 } }
  },
  select: {
    select: { projection: { field1: 1, field2: 1 } },
    deselect: { projection: { field3: 0, field4: 0 } }
  },
  combined: {}
};

result.combined = {
  ...result.limit,
  ...result.offset,
  sort: { ...result.sort.asc.sort, ...result.sort.desc.sort },
  projection: { ...result.select.select.projection, ...result.select.deselect.projection }
};

module.exports = {
  collection, queries, result
};