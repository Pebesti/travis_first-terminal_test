let assert = require("assert");
var transportFee = require('../functions/transportFee');
describe('This should return transportFee function' , function(){
    it('should show "R20" for the argument "morning"' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should return "R10" for the argument "afternoon"' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('should return free for the argument "nightshift"' , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});