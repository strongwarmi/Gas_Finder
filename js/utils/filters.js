'use strict';

const filterByDistrict = (stations,query) => {
  return  stations.filter((el) => {
   if (el.district.indexOf(query)>-1){
       //console.log(el.district.indexOf(query));
       return el;       
   }                    
 });
}


