/*///////////////////////////////////////////////////////////////////////////
Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
The winner with the highest average score wins a trophy!


tasks:
1. Calculate the average score for each team,using the test data below
2. Compare the team's average scores to etermine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1:Include a requirement for a minimum score of 100. With this rule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2:Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. ç score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.

*/


//function to calculate the average team score

let avg = function (...scores) { //rest operator

    return Math.floor(scores.reduce((a,b) => a+b)/3);
}

let winner = function (DolphinsScore, KoalasScore) {

    DolphinsScore = avg(...DolphinsScore);
    KoalasScore = avg(...KoalasScore);

    if (DolphinsScore >100 && KoalasScore>100 ) {

        return DolphinsScore === KoalasScore? `It is a draw with DolphinsScore score of ${DolphinsScore} and KoalasScore score of ${KoalasScore}.`: DolphinsScore > KoalasScore? `Dolphins team has won the tropgy with average score of ${DolphinsScore}.`: `Kolas team has won the tropgy with average score of ${KoalasScore}.`;

     } 
     return `None has won the tropy with DolphinsScore score of ${DolphinsScore} and KoalasScore score of ${KoalasScore}.`     

    };

console.log(winner([96,108,89],[88,91,110])); //None has won the tropy with DolphinsScore score of 97 and KoalasScore score of 96. 
console.log(winner([97,112,101],[109,95,123])); //Kolas team has won the tropgy with average score of 109. 
console.log(winner([97,112,131],[109,95,106])); //Dolphins team has won the tropgy with average score of 113. 
console.log(winner([97,112,101],[109,95,106])); //It is a draw with DolphinsScore score of 103 and KoalasScore score of 103. 
