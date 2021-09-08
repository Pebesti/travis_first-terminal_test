module.exports = function(sales){
    const mapSales={};
    for(var i=0; i<sales.length;i++){
    mapSales[sales[i].department]=0;
    }
    var max=0;
    var maxDepartment="";
    for(var y=0; y<sales.length;y++){
      var departmentTotal = mapSales[sales[y].department]; 
      departmentTotal+= sales[y].sales;
      mapSales[sales[y].department]= departmentTotal;
      if(mapSales[sales[y].department]>max) {
        max = mapSales[sales[y].department];
        maxDepartment= sales[y].department;
      }
    }
    return maxDepartment;
    }
    