require('dotenv').config()
const app = require('../index.js')
const chai = require('chai')
const mongoose = require('mongoose')
const chaiHttp = require("chai-http");
const jwt = require('jsonwebtoken')
const assert = chai.assert

chai.config.includeStack = true

chai.should()
chai.use(chaiHttp)

describe('api', function() {

})