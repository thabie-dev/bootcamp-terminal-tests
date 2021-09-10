let assert = require('assert');
let regCheck =require("../function/regCheck");

describe('regCheck' , function(){
    it('should return "true," if registration numbers like this: RG 45 HN GP, LKG 679 EC, GHT 456 MP, FGT 491 L ' , function(){

     assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
     assert.equal(regCheck('5566 L', 'L'), true);
     assert.equal(regCheck('ERT 123 EC', 'EC'), true);
     assert.equal(regCheck('FGT 123 MP', 'MP'), true);
 });


    it('should return "false," if registration numbers like this: ND 123-456, CY 678-453, CA 1234-123 ' , function(){

     assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
     assert.equal(regCheck('5566 L', 'M'), false);
     assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    assert.equal(regCheck('FGT 123 MM', 'MP'), false);
 });

});