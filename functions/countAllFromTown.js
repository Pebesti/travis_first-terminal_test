module.exports = function(regs,regSignature){
    var spl= regs.split(',').map(item=>item.trim());
      var count=0;
      for(let i=0;i<spl.length;i++){    //Use for in 
      if(spl[i].startsWith(regSignature)) count++;
      }
         return count;
    }