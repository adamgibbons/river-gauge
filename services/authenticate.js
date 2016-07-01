var db = require('./db');

db.authenticate()
.then(function () {
  console.log('Data persistence layer connected');
  console.log(success);
})
.catch(function (err) {
  console.log('Data persistence layer failed to connect');
  console.log(err);
})