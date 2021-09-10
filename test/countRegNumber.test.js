let assert = require('assert');
let countRegNumber =require("../function/countRegNumber");

describe('countRegNumber' , function(){
   
    it('stringArray.length' , function(){

        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
        
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);     
    });

});