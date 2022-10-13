const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let res = [];
  let count =1;
  
  for (i=0; i<str.length; i++) {
    if (str[i] !== str[i+1]) {     
    //  [count, str[i]].map(element => {if(element===1){
    //   element=''
    // }     
    // });
    res.push([count, str[i]].join(''));
    count = 1;
       
    }  else {
      
      count++}
  
  }
  
  
 

    let res2 = res.join('');

    return res2.split('1').join('');
    // res2.replace(/[1]]/g, '');
}

module.exports = {
  encodeLine
};
