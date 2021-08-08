/* Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

tasks:
1. Calculate the tip,depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value,the tip,and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430 Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's >= 50 && <= 300😉

*/

//Solution 1: 

let tip = function (bill) {

 let calc = bill< 50 ? 0 : bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
 
 return `The bill was ${bill}, the tip was ${calc}, and the total value ${bill + calc}`

}

console.log(tip(275)); //The bill was 275, the tip was 41.25, and the total value 316.25
console.log(tip(40)); //The bill was 40, the tip was 0, and the total value 40
console.log(tip(430)); //The bill was 430, the tip was 86, and the total value 516


//Solution 2: 

let bill = [120,70,30,450];

let caclTip = function(bill) {

    return bill< 50 ? 0 : bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let tipArray=[], finalBillArray=[]; 

function printfinalBillArray(billArray){

    for (let i in billArray) {

        tipArray.push(caclTip(billArray[i]));
        finalBillArray.push(tipArray[i]+billArray[i]);

    }
}

printfinalBillArray(bill)

console.log(`Bill array is [${bill}]`); //Bill array is [120,70,30,450]
console.log(`Tip array is [${tipArray}]`); //Tip array is [18,10.5,0,90]
console.log(`Final Bill is [${finalBillArray}]`); //Final Bill is [138,80.5,30,540]
