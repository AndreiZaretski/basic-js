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
  // remove line with error and write your code here
  //throw new NotImplementedError('Not implemented');

  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }

  if (!arr || arr.length ==0) {
    return []
  }

  
  let newArr = arr.slice();
  //[...arr];
  for (let i = 0; i<newArr.length; i++) {
    // let newArr = [...arr];
     if (newArr[i] ==='--discard-next' ) {
      newArr.splice(newArr[i], 2);
      return newArr;
     }

     if (newArr[i] === '--discard-prev') {
      //newArr = arr.splice(arr[i-1], 2);
      newArr.splice(newArr[i-1], 2);
      return newArr;
     }

     if (newArr[i] === '--double-next') {
      //arr[i] =arr[i+1];
      //newArr = arr.splice(arr[i], 1, arr[i+1]);
      newArr.splice(newArr[i], 1, newArr[i+1]);
      return newArr;
     } 
    //  else if (newArr[i] === '--double-next' && newArr[i+1] === undefined) {
    //   newArr.splice(newArr[i], 1);
    //   return newArr;
    //  }

     if (newArr[i] ==='--double-prev') {
      //arr[i] = arr[i-1];
      //newArr = arr.splice(arr[i], 1, arr[i-1]);
      newArr.splice(newArr[i], 1, newArr[i-1]);
      return newArr;
     } 
     //else if (newArr[i] ==='--double-prev' && newArr[i-1] === undefined) {
      //newArr.splice(newArr[i], 1);
      //return newArr;
     //}
  return newArr;
    }
}

module.exports = {
  transform
};
