// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = '23';
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2020 - birthYear;
console.log(calcAge(1999))


const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);