module.exports = function(str){
    let sms = 0.65;
    let call = 2.75;
    let sum=0;
    var spl = str.split(',').map(stri=>stri.trim());
    for(let i=0;i<spl.length;i++){
    if(spl[i]=='call') sum+=call;
    else if(spl[i]=='sms') sum+=sms;
    } 
        return "R"+sum.toFixed(2).toString();
    }
    