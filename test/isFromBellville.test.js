let assert = require('assert');
let isFromBellville =require("../function/isFromBellville");

describe('isFromBellville' , function(){
    it('regNo.startsWith, " CY' , function(){

        assert.equal(isFromBellville('CY 123'), true);       
    });

});