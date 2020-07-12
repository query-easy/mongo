const collection = 'test';

const queries = {
  eq: ['name.first', 'Drew'],
  neq: ['gender', 'M'],
  lt: ['age', 25],
  gt: ['height', 172],
  lte: ['bmi', 19],
  gte: ['name', null],
  regex: ['country', new RegExp('gotham', 'i')],
  exists: {
    exist: ['name.last', true],
    not_exist: ['name.middle', false]
  },
  type: ['address', 'array'],
  in: ['dept', 'dept1', 'dept2'],
  nin: ['ageGroup', 'ADOLESCENT', 'OLD'],
  all: ['sport', 'basketball', 'tennis'],
  size: ['incidents', 5],
  not: ['parent.name', 'Doe'],
  and: { neq: ['weight', 60] },
  or: { size: ['orders', 10] },
  nor: { gt: ['footSize', 8] }
};

const result = {
  eq: { 'name.first': queries.eq[1] },
  neq: { gender: { $ne: queries.neq[1] } },
  lt: { age: { $lt: queries.lt[1] } },
  gt: { height: { $gt: queries.gt[1] } },
  lte: { bmi: { $lte: queries.lte[1] } },
  gte: { name: { $gte: queries.gte[1] } },
  regex: { country: { $regex: queries.regex[1] } },
  exists: {
    exist: { 'name.last': { $exists: queries.exists.exist[1] } },
    not_exist: { 'name.middle': { $exists: queries.exists.not_exist[1] } }
  },
  type: { address: { $type: queries.type[1] } },
  in: { dept: { $in: queries.in.slice(1, queries.in.length) } },
  nin: { ageGroup: { $nin: queries.nin.slice(1, queries.nin.length) } },
  all: { sport: { $all: queries.all.slice(1, queries.all.length) } },
  size: { incidents: { $size: queries.size[1] } },
  not: { 'parent.name': { $not: queries.not[1] } },
  and: { $and: [{ weight: { $ne: queries.and.neq[1] } }] },
  or: { $or: [{ orders: { $size: queries.or.size[1] } }] },
  nor: { $nor: [{ footSize: { $gt: queries.nor.gt[1] } }] },
  combined: {}
};

result.combined = {
  ...result.eq, ...result.neq,
  ...result.lt, ...result.gt, ...result.lte, ...result.gte,
  ...result.regex,
  ...result.exists.exist, ...result.exists.not_exist,
  ...result.type,
  ...result.in, ...result.nin, ...result.all, ...result.size,
  ...result.not, ...result.and, ...result.or, ...result.nor
};

module.exports = {
  collection, queries, result
};