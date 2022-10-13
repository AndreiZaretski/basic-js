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

  let month= date.getMonth();
  let res;
  if( month == 11 || 0||1) {res = 'winter'}
  else if (month == 2||3||4) {res = 'spring'}
  else if (month ==5 ||6||7) {res ='summer'}
  else if (month = 8||9||10){res == 'autumn'}
  else if (typeof(month) != Number) {res == 'Invalid date!'}

  return res
}

module.exports = {
  getSeason
};
