let assert = require('assert');
let findItemsOver =require("../function/findItemsOver");

describe('findItemsOver' , function(){

    it('should return "the products," when it has  quantity higher than the threshold' , function(){
        var results = [];
        var itemList = [];
        assert.deepEqual(results, findItemsOver(itemList, 20));
        
    });
    it('should return "the products," when it has  quantity higher than the threshold' , function(){
        var results2 = [];
        var itemList2 = [];
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
        
    });
    it('should return "the products," when it has  quantity higher than the threshold' , function(){ 
        var results3 = [];
        var itemList3 = [];   
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
            
    });

   

}); 









        
console.log('findItemsOver passed!');
