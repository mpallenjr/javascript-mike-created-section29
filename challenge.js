/*
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK � 

let markMass;
let markHeight;
let johnMass;
let johnHeight;

markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;

let markBmi = markMass / markHeight ** 2;
let johnBmi = johnMass / johnHeight ** 2;

console.log("Data 1:", markBmi, johnBmi)
console.log(markBmi > johnBmi)

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`)
} else {

  console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`)
}

markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

markBmi = markMass / markHeight ** 2;
johnBmi = johnMass / johnHeight ** 2;

console.log("Data 2:", markBmi, johnBmi)
console.log(markBmi > johnBmi)
/*
/// Solution ///

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn =1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn =1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI); 





/////////////

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK � 


if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`)
} else {

  console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`)
}
*/

/*
// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK

// const dolphinsScoreGameOne = 96;
// const dolphinsScoreGameTwo = 108;
// const dolphinsScoreGameThree = 89;

// const koalasScoreGameOne = 88;
// const koalasScoreGameTwo = 91;
// const koalasScoreGameThree = 110;

// const dolphinsScoreGameOne = 97;
// const dolphinsScoreGameTwo = 112;
// const dolphinsScoreGameThree = 101;

// const koalasScoreGameOne =109;
// const koalasScoreGameTwo =95;
// const koalasScoreGameThree = 123;

const dolphinsScoreGameOne = 97;
const dolphinsScoreGameTwo = 112;
const dolphinsScoreGameThree = 101;

const koalasScoreGameOne =109;
const koalasScoreGameTwo =95;
const koalasScoreGameThree = 106;

const dolphinsAverageScore = (dolphinsScoreGameOne + dolphinsScoreGameTwo + dolphinsScoreGameThree) / 3;

console.log(dolphinsAverageScore);

const koalasAverageScore = (koalasScoreGameOne + koalasScoreGameTwo + koalasScoreGameThree) / 3;

console.log(koalasAverageScore);

if(dolphinsAverageScore > koalasAverageScore) {

  console.log('The Dolphins take home the trophy!')

} else if(dolphinsAverageScore === koalasAverageScore && !dolphinsAverageScore < 100 && !koalasAverageScore < 100) {

  console.log("It's a draw! Nobody wins...")

} else if(dolphinsAverageScore < 100 && koalasAverageScore < 100) {

  console.log('Nobody wins because you scored too little')


} else {

  console.log('The Koalas win the trophy!') 

}
*/

///// Video Solution

// const scoreDolphins = (96 + 108 + 89) /3 ;
// const scoreKoalas = (88 + 91 + 110) /3 ;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy')
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }
/*
// Bonus 1
const scoreDolphins = (97 + 112 + 101) /3 ;
const scoreKoalas = (109 + 95 + 123) / 3 ;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy')
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the tophy')
}
*/

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430 Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉
// GOOD LUCK 😀

const bill = 300;
let total;
let tipPercent;
let tipAmount;
bill >= 50 && bill <= 300 ? tipPercent = 0.15 : tipPercent = 0.20; 


tipAmount = bill * tipPercent;
total = bill + tipAmount;


console.log(`The bill was ${bill} dollars, the tip was ${tipAmount} dollars, and the total value ${total} dollars`)

