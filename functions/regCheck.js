module.exports = function(numPlate, reg){
    return numPlate.startsWith(reg) || numPlate.endsWith(reg);
   }