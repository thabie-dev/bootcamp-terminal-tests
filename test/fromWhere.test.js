let assert = require('assert');
let fromWhere =require("../function/fromWhere");

describe('fromWhere' , function(){

    it('should return "Bellville " If the reg number starts with CY' , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });

    it('should return "Paarl " If the reg number starts with CJ' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });

    it('should return "Cape Town " If the reg number starts with CA' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });

    it('should return "Someother place " If the reg number starts with CC' , function(){
        assert.equal(fromWhere('CC'), 'Some other place!');
    });

}); 







