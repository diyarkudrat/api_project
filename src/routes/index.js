const users = require('./users');
const shoes = require('./shoes');
const colorways = require('./colorways');

module.exports = (router) => {
  users(router);
  shoes(router);
  colorways(router);

  return router;
};