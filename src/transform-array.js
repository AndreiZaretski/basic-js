const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  

  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }

  if (!arr || arr.length ==0) {
    return []
  }

  
  let newArr = arr.slice();
  //[...arr]
  
  
  for (let i = 0; i<newArr.length; i++) {
   
    if (newArr[i] ==='--discard-next') {

      if (newArr[newArr.length-1] ==='--discard-next') {
        newArr.splice(newArr.length-1, 1);
        i++;
        continue;
      }
      newArr.splice(i, 2);
      i++;
      //continue;
      //i--;
      } 

      if (newArr[i] === '--discard-prev') {
        if (newArr[0] ==='--discard-prev') {
          newArr.splice(0, 1);
          i--;
          continue;
         }

         if (newArr[i] === '--discard-prev' && newArr[i-2]==='--discard-next'|| newArr[i] === '--discard-prev' && newArr[i-2]==='--double-next') {
          newArr.splice(i, 1);
          i--;
          //return newArr;
          continue;
         }
      newArr.splice(i-1, 2);
      i-=2;
      //continue;
      //i-=2;
      //return newArr;
     }  

     if (newArr[i] === '--double-next') {
      if(newArr[newArr.length-1] === '--double-next') {
        newArr.splice(newArr.length-1, 1);
        i++;
      //return newArr;
      continue;
      }
      newArr.splice(i, 1, newArr[i+1]);
      i++;
      //return newArr;
      //continue;
     }  
   

     if (newArr[i] ==='--double-prev') {

      if (newArr[0] ==='--double-prev') {
        newArr.splice(0, 1);
        i--;
        //return newArr;
       continue;
       }

       if (newArr[i] ==='--double-prev'&& newArr[i-2]==='--discard-next'|| newArr[i] ==='--double-prev'&& newArr[i-2]==='--double-next') {
        newArr.splice(i, 1);
        i--;
        //return newArr;
       continue;
       }
      newArr.splice(i, 1, newArr[i-1]);
      //return newArr;
     } 
    //  else if (newArr[i] ==='--double-prev' && newArr[i-1] === undefined) {
    //   newArr.splice(i, 1);
    //   i--;
    //   //continue;
    //   //return newArr;
    //  }
  return newArr;
    }
}

module.exports = {
  transform
};
