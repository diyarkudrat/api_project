const express = require('express')

const Shoe = require('../models/shoe.js')

const router = express.Router(); // eslint-disable-line new-cap

// GET /api/thing
router.get('/api/shoes', (req, res) => {
  Shoe.find().then(shoes => {
    res.send({ shoes })
  })
})

router.post('/api/shoes', (req, res) => {
  const shoe = new Shoe(req.body)

  shoe.save((err, shoe) => {
    return res.send({ shoe })
  })
})


// TODO: Add more routes.


module.exports = router;
