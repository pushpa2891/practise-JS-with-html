/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solvingframework: Understand the problem and break it up into sub-problems!

Test data:

§ Data 1: [17, 21, 23]
§ Data2:[12,5,-5,0,4]
*/

let forecastedTemp = function(tempature) {

  let string = ""; 

   for (let i in tempature) {

     string += `... ${tempature[i]}oC in ${i} days `;

   }
   
   return string;

} 

console.log(forecastedTemp([17, 21, 23]));
console.log(forecastedTemp([12,5,-5,0,4])); 