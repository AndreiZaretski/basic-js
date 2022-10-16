const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res;

  if (!date) {
    return 'Unable to determine the time of year!';
 }
  if (Object.keys(date).length > 0) {
  throw new Error('Invalid date!');
}

try {
  date.getMonth()
} catch {
  throw new Error('Invalid date!')
}

// if(!date.getMonth()) {
//   return 'Invalid date!'
// }

// if (typeof(month) != Number) {res = 'Invalid date!'; return res}

  let month= date.getMonth();
  
  // if( month === 11||0||1||00||01) {res = 'winter';
  // return res}
  // else if (month === 2||3||4||02||03||04) {res = 'spring';
  // return res}
  // else if (month ===5||6||7||05||06||07) {res ='summer';
  // return res}
  // else if (month === 8||9||10||08||09){res = 'autumn';
  // return res}
  // else if (typeof(month) != Number) {res = 'Invalid date!'; return res}
  let sesons = ['winter','winter','spring','spring','spring', 
  'summer','summer','summer','autumn','autumn','autumn','winter']

  res = sesons[month];
return res;
  
}

module.exports = {
  getSeason
};
