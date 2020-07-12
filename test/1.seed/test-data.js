const faker = require('faker');
const lo = require('lodash');

const sports = [
  'basketball', 'kabaddi', 'chess', 'hockey', 'malakhamb',
  'polo', 'tennis', 'football', 'paper toss'
];

let used = {
  countries: [],
  heights: [],
  namePrefix: [],
  sports: []
};

/**
 * @dev push data usage for dynamic querying
 * @param {string} type one of [country, height]
 * @param {any} data
 */
const use = (type, data) => {
  switch (type.toLowerCase()) {
    case 'country': {
      if (!used.countries.includes(data)) used.countries.push(data);
      break;
    }
    case 'height': {
      if (!used.heights.includes(data)) used.heights.push(data);
      break;
    }
    case 'name': {
      let prefix = data.split(' ')[0];
      if (!used.namePrefix.includes(prefix)) used.namePrefix.push(prefix);
      break;
    }
    case 'sports': {
      let sportArr = data.sort();
      let i = 0;
      for (; i < used.sports.length; i++) {
        if (lo.isEqual(used.sports[i], sportArr))
          break;
      }
      if (i === used.sports.length)
        used.sports.push(sportArr);
      break;
    }
  }
};

const data = [];

for (let i = 0; i < 1000; i++) {
  let sportsMin = faker.random.number({ min: 1, max: sports.length - 1 });
  let sportsMax = faker.random.number({ min: sportsMin, max: sports.length });
  let obj = {
    country: faker.address.county(),
    height: faker.random.number({ min: 100, max: 220 }),
    name: `${faker.name.prefix()} ${faker.name.firstName()} ${faker.name.lastName()}`,
    sports: sports.slice(sportsMin, sportsMax)
  };
  if (faker.random.number({ min: 1, max: 10 }) > 5)
    obj.department = faker.commerce.department();
  if (faker.random.number({ min: 1, max: 10 }) > 5)
    obj.address = [faker.address.streetName(), faker.address.city(), faker.address.zipCode()];
  else
    obj.address = `${faker.address.streetName()} ${faker.address.city()} ${faker.address.zipCode()}`;

  use('country', obj.country);
  use('height', obj.height);
  use('name', obj.name);
  use('sports', obj.sports);

  data.push(obj);
}

module.exports = {
  data,
  used
};