let assert = require("assert");
var fromWhere = require('../functions/fromWhere');
describe('The fromWhere function is being tested in this test' , function(){
    it('should return true if registration is from "Bellville"' , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('should return true if registration is from "Cape Town"' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('should return return true if registration from  "Some other place!"' , function(){
        assert.equal(fromWhere('CC'), 'Some other place!');
    });
});