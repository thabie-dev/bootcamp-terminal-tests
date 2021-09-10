let assert = require('assert');
let findItemsOver =require("../function/findItemsOver");

describe('findItemsOver' , function(){

    it('should return "the products," when it has  quantity higher than the threshold' , function(){
        assert.deepEqual(results, findItemsOver(itemList, 20));
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
        assert.deepEqual(results3, findItemsOver(itemList3, 20));

    });

   

}); 