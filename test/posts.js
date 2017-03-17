var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

var Pet = require('../models/post');

var user = chai.request.agent(server);

describe("Pet", function() {

  // INDEX
  // it('should list ALL posts on /posts GET', function (done) {

  // });

  // SHOW
  // it('should list ALL posts on /posts GET', function (done) {

  // });

})