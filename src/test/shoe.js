const app = require("../index.js");
const mongoose = require('mongoose');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const chaiHttp = require("chai-http");

chai.config.includeStack = true;

chai.should()
chai.use(chaiHttp);

//Sample Shoe
const sampleShoe = {
  name: 'White Cement',
  model: 'Air Jordan 3',
  type: 'Basketball',
  year: '1993',
  id: '854262-001',
  price: '200.00'
}

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('Shoe APIs', () => {
  beforeEach((done) => {
    User.create({username: 'test123', password: 'password'})
    done()
  })

  afterEach((done) => {
    User.remove({username: 'test123'}).then() => {
      Shoe.remove({name: 'White Cement'}).then(() => done())
    }
  })

  it('should load homepage', () => {
    chai.request(app)
      .get('/api/shoes')
      .set('jwttoken', jwt.sign({ username: 'test123' }, process.env.JWT_SECRET))
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        res.status.should.be.equal(200);
        return done();
      })
  })

  //Index test
  it('should show all shoes', (done) => {
    let shoe = new Shoe(sampleShoe);
    shoe.save().then((savedShoe) => {
      chai.request(app)
      .get('api//shoes')
      .end((err, res) => {
        if(err) {
          return done(err)
        }

        assert.equal(res.status, 200)
        assert.isArray(res.body)
        return done()
      })
    })
  })

  it('should show specific shoe', (done) => {
    let shoe = new Shoe(sampleShoe)
    shoe.save().then((savedShoe) => {
      chai.request(app)
      .get(`api/shoes/${savedShoe._id}`)
      .set('jwttoken', jwt.sign({ username: 'test123' }, process.env.JWT_SECRET))
      .end((err, res) => {
        if (err) {
          return done(err)
        }

        assert.equal(res.body.name, 'White Cement')
        assert.equal(res.body.model, 'Air Jordan 3')
        return done()
      })
    })
  })

  it('should POST new shoe', (done) => {
    chai.request(app)
      .post('api//shoes')
      .set('jwttoken', jwt.sign({ username: 'test123' }, process.env.JWT_SECRET))
      .send(sampleShoe)
      .then(res => {
        assert.equal(res.status, 200)
        assert.equal(res.body.name, 'White Cement')
        assert.equal(res.body.type, 'basketball')
        assert.isNotEmpty(res.body._id)

        //make sure data was added to database
        Shoe.find({name: 'White Cement'}).then(result => {
          assert.equal(result.length, 1)
        })
        
        return done()
      }).catch(err => {
        return done(err)
      })
  })
  it*'should update a single shoe', function(done) {
    chai.request(app)
    .get('/api/shoes')
    .end(function(err, res) {
      chai.request(app)
      .put('/api/shoes/' + res.body[0]._id)
      .send({'name': 'Black Cement'})
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object')
        res.body.should.have.property('UPDATED');
        res.body.UPDATED.should.be.a('object');
        res.body.UPDATED.should.have.property('name');
        res.body.UPDATED.should.have.property('_id');
        res.body.UPDATED.name.should.equal('Black Cement');
        done();
      })
    })
    it('should delete a single shoe', function(done) {
      chai.request(app)
        .get('/api/shoes')
        .end(function(err, res){
          chai.request(app)
            .delete('/api/shoes'+res.body[0]._id)
            .end(function(err, res){
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('object');
              res.body.should.have.property('REMOVED');
              res.body.REMOVED.should.be.a('object');
              res.body.REMOVED.should.have.property('name');
              res.body.REMOVED.should.have.property('_id');
              res.body.REMOVED.name.should.equal('White Cement');
              done();
          });
        });
    });
  }

});
