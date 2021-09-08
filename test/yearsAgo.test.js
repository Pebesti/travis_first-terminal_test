let assert = require("assert");
var yearsAgo = require('../functions/yearsAgo');
describe('should test the yearsAgo function' , function(){
    it('should show the number of years passed since 1976' , function(){
        assert.equal((new Date().getFullYear() -1976), yearsAgo(1976));;
    });
    it('should show the number of years passed since 2000' , function(){
        assert.equal((new Date().getFullYear() -2000), yearsAgo(2000));   
    });
});