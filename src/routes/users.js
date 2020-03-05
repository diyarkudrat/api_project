const controller = require('../controllers/users');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {

  router.route('/users')
    .get(validateToken, controller.getAll); // route protected with the token validation function

  router.route('/sign-up')
    .get(controller.signup)
    .post(controller.add)

  router.route('/login')
    .post(controller.login)
};