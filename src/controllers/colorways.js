const mongoose = require('mongoose');
const Colorway = require('../models/colorway');

const connUri = process.env.MONGO_LOCAL_CONN_URL;

module.exports = {

    add: (req, res) => {
        mongoose.connect(connUri, { useNewUrlParser : true }, (err) => {
          let result = {};
          let status = 201;
          if (!err) {
            const { name, colors } = req.body;
            const colorway = new Colorway({ name, colors });
            colorway
                // .save((err, colorway) => {
                //     if (!err) {
                //         result.status = status;
                //         result.result = colorway;
                //     } else {
                //         status = 500;
                //         result.status = status;
                //         result.error = err;
                //     }
                //     res.status(status).send(result);
                .save()
                .then((comment) => {
                    return Promise.all([
                        Shoe.findById(req.params.shoeId)
                    ]);
                })
            });
          } else {
            status = 500;
            result.status = status;
            result.error = err;
            res.status(status).send(result);
          }
        });
      },
}