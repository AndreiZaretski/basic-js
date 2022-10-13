const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // return true;
//   if (n.length == 0)
//  return false;

// let res1 = n.split('-');

// if(!res1.length ===6) return false;
// if (res1.length ===6) {
//   for(let i=0; i<6; i++) {
//     let res2 = res1[i].split('');
//     if(res2.length ===2){
      
//         if(res2[0]==='0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'
//         ||'8'||'9'||'A'||'B'||'C'||'D'||'E'||'F' 
//           && res2[1]==='0'||'1'||'2'||'3'||'4'||'5'||'6'
//           ||'7'||'8'||'9'||'A'||'B'||'C'||'D'||'E'||'F') 
//           {return true} 
       
//     } 
//   } 
// }else {return false}
// console.log(res1, res2)


 

let result = true;

if (n.length == 0)
   return false;
 
   let elem1 = n.split('-');
for (let i=0; i<n.length; i++)
{
   
   if (elem1.length == 6)
   {
       let regex = /^[A-F|0-9]{2}$/;
       
       for (let j=0; j<elem1.length; j++)
       {
    if (!regex.test(elem1[j]))
           {
            result = false;
        return result;
    }
       }
   }
   else
   {
    result = false;
       break;
   }
}
return result;
}
module.exports = {
  isMAC48Address
};
