//const { count } = require("console");

module. exports =function countAllFromTown(string, streetString){

    var list = string.split(",");
    var twnLst = [];  var count = 0;
      
        for(var i=0; i<list.length; i++){
            if(list[i].includes(streetString)===true){
              count++;
                   twnLst.push(list[i].trim());
            }
    
        } 
        
      return count;
    }    

    