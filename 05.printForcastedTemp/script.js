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

   for (let [index,item] of tempature.entries()) { //array destructuring

     string += `... ${item}oC in ${index} days `;

   }
   
   return string;

} 

console.log(forecastedTemp([17, 21, 23])); //... 17oC in 0 days ... 21oC in 1 days ... 23oC in 2 days 
console.log(forecastedTemp([12,5,-5,0,4])); //... 12oC in 0 days ... 5oC in 1 days ... -5oC in 2 days ... 0oC in 3 days ... 4oC in 4 days 
