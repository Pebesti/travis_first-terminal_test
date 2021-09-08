let assert = require("assert");
var countAllFromTown = require('../functions/countAllFromTown');
describe('Testing the countAllFromTown function' , function(){
    it('should return the folloeing number plates from Kuilsriver which contains 1' , function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        assert.equal(fromKuilsriver, 1)
    });
    it('should return the following number plates from Stellies which contains 3' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.equal(fromStellies, 3)
    });
});