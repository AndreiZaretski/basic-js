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
// let res1 = n.split('-');

// if(res1.length !==6) return false;
// if (res1.length ===6) {
//   for(let i=0; i<6; i++) {
//     let res2 = res1[i].split('');
//     if(res2.length ===2){
      
//         if(res2[0]==='0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'A'||'B'||'C'||'D'||'E'||'F' 
//           && res2[1]==='0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'A'||'B'||'C'||'D'||'E'||'F') 
//           {return true} 
       
//     } 
//   } 
// }else {return false}
// console.log(res1, res2)

// let valid = true;
// for (let i=0; i<n.length; i++)
// {
    
//     let regex = /^([A-F|0-9]{2}-){5}[A-F|0-9]{2}$/;
//     if (!regex.test(n[i]))
//     {
//  valid = false;
//  break;
//     }
// }
// return valid;

let valid = true;
//Проверка входного параметра
if (!n instanceof Array || n.length == 0)
   return false;
             
for (let i=0; i<n.length; i++)
{
   // Разбиение mac-адреса на элементы по символу ':'
   // elementsMacAddress - массив такого формата:
   //    mac-адрес: 64:A2:C7:B0:D3:B2
   //    массив: ['64','A2','C7','B0','D3','B2']
   let elementsMacAddress = n[i].split('-');
   // В массиве должно быть ровно шесть элементов mac-адреса
   if (elementsMacAddress.length == 6)
   {
       var regex = /^[A-F|0-9]{2}$/;
       // Перебор всех компонентов mac-адреса
       for (let j=0; j<elementsMacAddress.length; j++)
       {
    if (!regex.test(elementsMacAddress[j]))
           {
        valid = false;
        return valid;
    }
       }
   }
   else
   {
       valid = false;
       break;
   }
}
return valid;
}
module.exports = {
  isMAC48Address
};
