let assert = require('assert');
let isWeekday =require("../function/isWeekday");

describe('isWeekday' , function(){
   it( 'should return false if not a weekday', function (){
       assert.equal(isWeekday ('Saturday'), false);     
    });
    it( 'should return true if not a weekday', function (){
        assert.equal(isWeekday ('Monday'), true);  
    });
});