const controller = require('../controllers/users');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {

  router.route('/users')
    .post(controller.add)
    .get(validateToken, controller.getAll); // route protected with the token validation function

  router.route('/login')
    .post(controller.login)
};