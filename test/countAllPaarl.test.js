let assert = require("assert");
var countAllPaarl = require('../functions/countAllPaarl');
describe('Testing the countAllPaarl function' , function(){
    it('should return number of registration from Paarl in the string  equating to 3' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it('should return number of registration from Paarl in the string equating to 2 ' , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
});