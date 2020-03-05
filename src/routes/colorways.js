const controller = require('../controllers/shoes');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {

  router.route('/shoes/:shoeId/colorways')
    .post(controller.add)
};