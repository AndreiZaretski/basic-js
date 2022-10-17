const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res1 =String(n);
  let res=0;
  for (i=0; i<res1.length; i++) {
     res+=(+res1[i]);
  }
  if (res<10) {return res
  } else {
   let res2 =String(res);
   res=0;
    for(j=0; j<res2.length; j++ ) res += +res2[j];
    return res;
  }
  
}

module.exports = {
  getSumOfDigits
};
