const mongoose = require('mongoose');
const Shoe = require('../models/shoe');

const connUri = process.env.MONGO_LOCAL_CONN_URL;

module.exports = {
  add: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser : true }, (err) => {
      let result = {};
      let status = 201;
      if (!err) {
        const { name, model, type, year, SKU, price } = req.body;
        const shoe = new Shoe({ name, model, type, year, SKU, price });
        shoe.save((err, shoe) => {
          if (!err) {
            result.status = status;
            result.result = shoe;
          } else {
            status = 500;
            result.status = status;
            result.error = err;
          }
          res.status(status).send(result);
        });
      } else {
        status = 500;
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    });
  },
  getAll: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 200;
      if (!err) {
        const payload = req.decoded;

        if (payload) {
          Shoe.find({}, (err, shoes) => {
            if (!err) {
              result.status = status;
              result.error = err;
              result.result = shoes;
            } else {
              status = 500;
              result.status = status;
              result.error = err;
            }
            res.status(status).send(result);
          });
        } else {
          status = 401;
          result.status = status;
          result.error = `Authentication Error`;
          res.status(status).send(result);
        }
      } else {
        status = 500;
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    });
  },
  getOne: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 200;
      if (!err) {
        const payload = req.decoded;

        if (payload) {
          Shoe.findById(req.params.id, (err, shoes) => {
            if (!err) {
              result.status = status;
              result.error = err;
              result.result = shoes;
            } else {
              status = 500;
              result.status = status;
              result.error = err;
            }
            res.status(status).send(result);
          });
        } else {
          status = 401;
          result.status = status;
          result.error = `Authentication Error`;
          res.status(status).send(result);
        }
      } else {
        status = 500;
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    });
  },
  updateOne: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 200;
      if (!err) {
        const payload = req.decoded;

        if (payload) {
          Shoe.findById(req.params.id, (err, shoes) => {
            if (!err) {
              result.status = status;
              result.error = err;
              result.name = req.body.name;
              result.model = req.body.model;
              result.type = req.body.type;
              result.year = req.body.year;
              result.SKU = req.body.SKU;
              result.price = req.body.price;
            } else {
              status = 500;
              result.status = status;
              result.error = err;
            }
            res.status(status).send(result);
          });
        } else {
          status = 401;
          result.status = status;
          result.error = `Authentication Error`;
          res.status(status).send(result);
        }
      } else {
        status = 500;
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    });
  },
  deleteOne: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 200;
      if (!err) {
        const payload = req.decoded;

        if (payload) {
          Shoe.findByIdAndDelete(req.params.id, (err, shoes) => {
            if (!err) {
              result.status = status;
              result.error = err;
              result.result = shoes;
            } else {
              status = 500;
              result.status = status;
              result.error = err;
            }
            res.redirect('/api/shoes');
          });
        } else {
          status = 401;
          result.status = status;
          result.error = `Authentication Error`;
          res.status(status).send(result);
        }
      } else {
        status = 500;
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    });
  },
}













// const express = require('express')

// const Shoe = require('../models/shoe.js')

// const router = express.Router(); // eslint-disable-line new-cap

// // GET /api/thing
// router.get('/api/shoes', (req, res) => {
//   Shoe.find().then(shoes => {
//     res.send({ shoes })
//   })
// })

// router.post('/api/shoes', (req, res) => {
//   const shoe = new Shoe(req.body)

//   shoe.save((err, shoe) => {
//     return res.send({ shoe })
//   })
// })


// // TODO: Add more routes.


// module.exports = router;