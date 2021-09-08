let assert = require("assert");
var greet = require('../functions/greet');
describe('Testing the greet function' , function(){
    it('should return  Hello Pebetsi' , function(){
        assert.equal("Hello, Pebetsi",greet("Pebetsi"));
    });
    it('should return Hello Siphe' , function(){
        assert.deepEqual("Hello, Siphe",greet("Siphe"));
    });
    it('should not equal to Hello Siphe' , function(){
        assert.notEqual("Hello, Siphe",greet("No name"));
    });
});

