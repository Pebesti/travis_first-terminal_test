module.exports = function(regs){
    var spl= regs.split(',').map(item=>item.trim());
      var count=0;
      for(let i=0;i<spl.length;i++){
      if(spl[i].startsWith('CJ')) count++;
      }
         return count;
    }