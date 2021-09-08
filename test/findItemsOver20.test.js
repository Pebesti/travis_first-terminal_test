let assert = require("assert");
var findItemsOver20 = require('../functions/findItemsOver20');
//Arrays
var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

var results2 = [];

var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];
//TestCase for findItemsOver20 function
describe('Testing the findItemsOver20 function' , function(){
    it('should equal to the result variable' , function(){
        assert.deepEqual(results, findItemsOver20(itemList));
        });
    it('should equal to the result2 variable' , function(){
        assert.deepEqual(results2, findItemsOver20(itemList2));    
    });
    it('should equal to the result3 variable' , function(){
        assert.deepEqual(results3, findItemsOver20(itemList3));
       });
});