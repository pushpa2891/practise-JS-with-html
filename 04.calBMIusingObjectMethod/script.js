/*
implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them,create an object with properties for their fullname,mass,and height (Mark Miller and John Smith)
2. Createa'calcBMI'method on each object to calculate the BMI(the same method on both objects). Store the BMI value to a property, and also return it from the method
3. Log to the console who has the higher BMI,together with the fullname and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

*/

let caclBMI = function () {
  return this.mass / this.height ** 2;
};

let mark = {
  firstName: "Mark Miller",
  mass:78,
  height: 1.69,
  caclBMI, // advance object method concept;
};

let john = {
  firstName: "John Smith",
  mass: 92,
  height: 1.95,
  caclBMI, // advance object method concept;
};

let compareBMI = function (mark, john) {
  let markBMI = mark.caclBMI();
  let johnBMI = john.caclBMI();

  return markBMI > johnBMI
    ? `Mark's ${markBMI} BMI is hgiher than John's BMI ${johnBMI}!`
    : `John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}!`;
};

console.log(compareBMI(mark,john));