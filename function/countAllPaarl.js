module. exports =function countAllPaarl(Paarl){
    var list = Paarl.split(",");
      var regNumbersForPaarl = [];
      var count = 0;
      for(var i = 0; i < list.length; i++){
        
        if(list[i].includes('CJ') == true){
          count++;
         regNumbersForPaarl.push(list[i].trim());
      }
      }
      
      return count;
    }