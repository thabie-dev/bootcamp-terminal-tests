
 module. exports =function totalPhoneBill (PhoneBills){
 var sms=0.65;
 var call=2.75;
 var bills=PhoneBills.split(",");
 var total_call=[];
 var total_sms=[];
 var total_bill=0;
  for (var i=0; i<bills.length; i++){
    if (bills[i].includes('sms')){
      total_sms.push(bills[i]);}
    if (bills[i].includes('call')){
      total_call.push(bills[i]);}
  }
  total_bill=sms*total_sms.length +call*total_call.length;
  total_bill=total_bill.toFixed(2);
  return 'R' + total_bill;
}