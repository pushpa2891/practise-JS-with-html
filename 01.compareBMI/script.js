/*-------------------------------------------------------------------------

Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:

Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. 

*/

// Solution for Coding Challenge #1

let mark = {weight: '78', height:1.69};
let john = {weight: '95', height:1.95};
let markHigherBMI;

let calBMI = function(weight,height) {

    return weight / height ** 2; 

}

let compareBMI = function (mark,john){

    let markBMI, johnBMI;

    markBMI = calBMI(mark.weight,mark.height);
    johnBMI = calBMI(john.weight,john.height);

  return markHigherBMI = markBMI < johnBMI; 

}

console.log(compareBMI(mark,john));

//console.log(compareBMI({weight: '78', height:1.69}, {weight: '95', height:1.95} ));

