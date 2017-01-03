const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js');


const should = chai.should();
const app = server.app;

chai.use(chaiHttp);

describe('Event Manager', function() {
    it('should show signup/login page on GET', function(done) {
        chai.request(app)
            .get('/')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
    });
    it('should show onboarding page on GET', function(done) {
    	chai.request(app)
    	.get('/intro')
    	.end(function(err, res) {
    		res.should.have.status(200);
    		res.should.be.html;
    		done();
    	});
    });
    it('should show home page on GET', function(done) {
    	chai.request(app)
    	.get('/home')
    	.end(function(err, res) {
    		res.should.have.status(200);
    		res.should.be.html;
    		done();
    	});
    });
    it('should show event details page on GET', function(done) {
    	chai.request(app)
    	.get('/event-details/:id')
    	.end(function(err, res) {
    		res.should.have.status(200);
    		res.should.be.html;
    		done();
    	});
    });
});
