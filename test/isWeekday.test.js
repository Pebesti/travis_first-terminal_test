let assert = require("assert");
var isWeekday = require('../functions/isWeekday');
describe('Testing the isWeekday function' , function(){
    it('should return true for Monday' , function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('should return false if Sunday' , function(){
        assert.equal(isWeekday('Sunday'), false);
    });
    it('should return false if Saturday' , function(){
        assert.equal(isWeekday('Saturday'), false);
    });
});