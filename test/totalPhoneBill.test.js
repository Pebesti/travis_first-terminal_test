let assert = require("assert");
var totalPhoneBill = require('../functions/totalPhoneBill');
describe('should test the totalPhoneBill function' , function(){
    it('should return  R7.45 for the phone bill' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));    });
    it('should return R3.40 for the phone bill' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));    });
    it('should return R1.30 for the phone bill' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));    });
});