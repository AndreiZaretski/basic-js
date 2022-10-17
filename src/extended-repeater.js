const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator ? options.separator: '+',
      repeatTimes= options.repeatTimes ? options.repeatTimes: 1,
      additionSeparator= options.additionSeparator ? options.additionSeparator: '|',
      additionRepeatTimes = options.additionRepeatTimes ?options.additionRepeatTimes: 1;
      //addition = options.addition ? options.addition: '';
      let arr1 = [];
      let arr2 =[];
        
        for (let i =0; i < additionRepeatTimes; i++) {
          if(typeof options.addition !=='string') {
            options.addition = String(options.addition);
          }
          if(options.addition=== 'undefined') options.addition ='';
           arr1.push(options.addition)
        }
        let string1 = str + arr1.join(additionSeparator);
       
        for (let j=0; j<repeatTimes; j++) {
            arr2.push(string1);
        }
        
        return arr2.join(separator);
      


  
}

module.exports = {
  repeater
};
