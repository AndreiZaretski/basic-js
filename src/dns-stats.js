const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // let x = domains.map((elem)=>{
  //   elem.split('.').reverse();
  // });

  // let res1 =`.+${x[0][0].join('')}`;
  // let res2 = `${res1}+.+${x[0][1].join('')}`
  // let res3 = `${res2} +.+${x[1][2].join('')}`

  // for( i=0; i<domains.length; i++){
  //   for (j=0; j<x.length; j++){
  //     let 
  //   }
  // }
  for(i=0; i<domains.length; i++) {
    
  }
 let result = {
  res1: x.length,
  res2: x.length,
  res3: 1
 }
 return result
}

module.exports = {
  getDNSStats
};
