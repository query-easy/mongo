const express = require('express');
const users = require('@query-easy/mongo')('users');

const app = express();
const port = 3000;

app.post('/get-all-user-data', (req, res) => {
  console.log(req.body);
  /*
  Output:
  {
    name: 'John',
    age: {'>': 20},
    select: {
      name: true,
      age: true,
      _id: false,
    },
    sort: {
      asc: ['age']
    }
  }
  */
  const dbQuery = users.rawJson(req.body);
  console.log(dbQuery);
  /*
  Output:
  {
    filter: {
      name: {$eq: 'John'},
      age: {$gt: 20},
    },
    options: {
      projection: {name: 1, age: 1, _id: 0},
      sort: {age: 1}
    }
  }
  */
  let collection = mongodb().collection('users');
  collection.find(
    dbQuery.filter,
    dbQuery.options
  ).toArray((err, docs) => {
    res.send(docs);
  });
  dbQuery.clear();
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
