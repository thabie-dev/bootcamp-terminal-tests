let assert = require('assert');
let yearsAgo =require("../function/yearsAgo");

describe(' yearsAgo function' , function(){
    
    it('should return "how many years ago that year is from the current year " when its year 1976 ' , function(){

        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
            
    });
    it('should return "how many years ago that year is from the current year " when its year 2000 ' , function(){

        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));    
        });

});



