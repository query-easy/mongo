const fil = require('../filter/test-data');
const opt = require('../option/test-data');

const collection = 'test';

const queries = {
  simple: { ...fil.queries, ...opt.queries },
  random: {
    and: {
      eq: ['name', 'Prison Mike'],
      exists: ['job.HR', false],
      or: {
        in: ['hobby', ['rap', 'parkour']],
        all: ['relationships', ['jan', 'pam\'s mom', 'carol', 'donna']],
        nin: ['responsibilities', ['be', 'a', 'professional']],
        gte: ['crimes', 2500],
        lte: ['iq', 10],
        lt: ['age', 30],
        regex: ['spouse', new RegExp('holly', 'i')]
      },
      type: ['sales', 'number'],
      nor: {
        not: ['company', 'dundermifflin']
      }
    }
  }
};

const result = {
  simple: {
    filter: { ...fil.result.combined },
    options: { ...opt.result.combined }
  },
  random: {
    filter: {
      '$and': [
        { 'name': 'Prison Mike' },
        { 'job.HR': { '$exists': false } },
        {
          '$or': [
            { 'hobby': { '$in': ['rap', 'parkour'] } },
            {
              'relationships': {
                '$all': [
                  'jan',
                  'pam\'s mom',
                  'carol',
                  'donna'
                ]
              }
            },
            { 'responsibilities': { '$nin': ['be', 'a', 'professional'] } },
            { 'crimes': { '$gte': 2500 } },
            { 'iq': { '$lte': 10 } },
            { 'age': { '$lt': 30 } },
            { 'spouse': { '$regex': new RegExp('holly', 'i') } }
          ]
        },
        { 'sales': { '$type': 'number' } },
        { '$nor': [{ 'company': { '$not': 'dundermifflin' } }] }
      ]
    },
    options: {}
  }
};

module.exports = {
  collection, queries, result
};