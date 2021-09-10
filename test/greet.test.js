let assert = require("assert");
let greet =require("../function/greet");

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('HelloAndrew', greet('Andrew'));
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('HelloKaren', greet('Karen'));
    });
});