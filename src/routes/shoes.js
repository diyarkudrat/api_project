const controller = require('../controllers/shoes');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {

  router.route('/shoes')
    .post(controller.add)
    .get(validateToken, controller.getAll); // route protected with the token validation function

  router.route('/shoes/:id')
    .get(validateToken, controller.getOne)
    .put(validateToken, controller.updateOne)
    .delete(validateToken, controller.deleteOne)  
};