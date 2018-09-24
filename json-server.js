var jsonServer  = require('json-server');

var server      = jsonServer.create();
var router      = jsonServer.router(require('./route.js')());
var middlewares = jsonServer.defaults();

// Using _id in json because by default it using id to query
router.db._.id = "_id";
server.use(middlewares);
server.use(router);
server.listen(3000, function () {
  console.log('JSON Server is running');
});