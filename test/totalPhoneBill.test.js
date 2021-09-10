let assert = require('assert');
let totalPhoneBill =require("../function/totalPhoneBill");


describe('totalPhoneBill' , function(){
    it('should return totalPhoneBill "," IF its call and sms' , function(){

    assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    assert.equal('R3.40', totalPhoneBill('call, sms'));
    assert.equal('R1.30', totalPhoneBill('sms, sms'));

     
 });

});