const users = require('./users');
const shoes = require('./shoes');

module.exports = (router) => {
  users(router);
  shoes(router);
  return router;
};