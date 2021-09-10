let assert = require('assert');
let transportFee =require("../function/transportFree");

describe('transportFee function' , function(){

    it('should return "morning" when it is transport is R20' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it('should return "afternoon" when it is transport is R10' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('should return "nightshift" when it is transport is free' , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });

}); 






