let assert = require("assert");
var regCheck = require('../functions/regCheck');
describe('This test is a countAllFromTown test', function(){
    it('should return true for the registration DC 55 YU GP when matched to GP number plates' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('should not return true for the registration DC 55 YU GP, when matched to an EC identify' , function(){
        assert.notEqual(regCheck('DC 55 YU GP', 'EC'), true);
    });
    it('should return true for the registration 5566 L, when matched to an L number plate' , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });
});



