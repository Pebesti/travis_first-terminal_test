let assert = require("assert");
var isFromBellville = require('../functions/isFromBellville');
//TestCase for isFromBellville function
describe('This test is testing the isFromBellville function' , function(){
    it('should return True that it is from Bellville' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it('should return True that it is from Bellville' , function(){
        assert.equal(isFromBellville('CY 145'), true);
    });
    it('should return False that it is from Bellville' , function(){
        assert.equal(isFromBellville('CA 123'), false);
    });
    it('should return False that it is from Bellville' , function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });
});

