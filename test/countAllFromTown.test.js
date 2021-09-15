let assert = require('assert');
let countAllFromTown =require("../function/countAllFromTown");

describe('countAllFromTown' , function(){

  it('should return "number registration numbers in the string " when it is equal 3' , function(){
    var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//fromStellies should contains
assert.equal(fromStellies, 3)

var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
//fromStellies should contains
assert.equal(fromKuilsriver, 1)
    });

   

}); 
