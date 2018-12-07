//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('char-http');
let server = require('../index.js');
let should = chai.should();

chai.use(chaiHttp);