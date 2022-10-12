const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let arr1 = s1.split('');
  let arr2 = s2.split('');
  // let count = 0;

  // for(i=0; i<arr1.length; i++) {
  //  for(j=0; j<arr2.length; j++){
  //   if (arr1[i]===arr2[j]) {count += 1; continue; }
  // }
  
  // }
  
  // return count

  arr1.sort();
  arr2.sort();

  let i = arr1.length,
      j =arr2.length,
      arr3 = [];

      while (i>0 && j>0) {
        i--;
        j--;
        if (arr1[i]> arr2[j]) j++;
        else if (arr1[i]<arr2[j]) i++;
        else arr3.push(arr1[i]);
      }

      return arr3.length;

}

module.exports = {
  getCommonCharacterCount
};
