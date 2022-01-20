/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
let PI = 3.14125

//good variable names
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

//bad variable names
let job1 = 'programmer';
let job2 = 'teahcer';

//console.log print statement
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);


// declaring a variable allows you to change information in multiple places at once

//camelCase is the standard form of naming in JS

// cannot start a variable name with an integer

// variable names can only contain numbers, letters underscores, or the dollar sign.

// variable names cannot be js reserved keywords (name is somewhat reserved)

// variable names be lowercase unless declaring a class (OOP)

// Variables in all caps are reserved for variables we know will be constant IE. let PI = 3.14125

// variable names should be clear and accurate
*/


/*
//boolean [returns: true]
let javascriptIsFun = true;
console.log(javascriptIsFun);

//'operator' introduced [returns: boolean]
console.log(typeof true); 
console.log(typeof javascriptIsFun); 
console.log(typeof 23); 
console.log(typeof 'Mike'); 

//dyanmic typing example [returns: string]
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); 

//undefined [returns: undefined | undefined]
let year;
console.log(year);
console.log(typeof year); 

year = 1991;
console.log(year);
console.log(typeof year); 

//null [returns: object???]
console.log(typeof null);
*/

/*
//reassigning a variable (mutating the age value)
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; 

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Allen'
console.log(lastName)
*/
/*
//Math Operators
const now = 2022;
const ageMike = now - 1986;
const ageSarah = now - 2003;
console.log(ageMike,ageSarah);

console.log(ageMike * 2, ageSarah / 2 );

console.log(ageMike * 2, ageSarah /10, ageMike ** 3);
// ageMike ** 3 means ageMike(value) * ageMike(value) * ageMike(value)

const firstName = 'Mike';
const lastName = 'Allen';

//concantenation
console.log(firstName + ' ' + lastName);

//assingment operators

let x = 10 + 5;  // 15
//in this case the equal is an assignment operator, assigning a variable. the order goes from rightsied to the left side. So 15 is calculated before x is defined

x += 10; // 25             x = x +10 (same output)
console.log(x);
x *= 4; // 100
x++; //101
x--; //100
console.log(x);

//Comparison Operators
console.log(ageMike > ageSarah);
console.log(ageMike < ageSarah);
console.log(ageMike >= ageSarah);
console.log(ageMike <= ageSarah);

console.log(now - 1991 > now - 2018);
// JS knows to calcualter the now - X first, then compare the two values to display the boolean value in the console log.
*/
/*
const firstName = 'Mike';
const job = 'Developer';
const birthYear = 1986;
const year = 2022;
//old school
const mike = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
//in the case above JavaScript will automatically convert the integer derived from year - birthYear into a string.  This is called type corrosion
console.log(mike);
//new school
const mikeNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(mikeNew);
// can use backtics for all strings if you wantes
console.log(`you can use backtics for all strings...`);

//multi-line pre es6
console.log('String with \n\
multiple \n\
lines');
// es6 template literal
console.log(`String
multiple
lines`);
*/
/*
const age = 19;

if(age >= 16) {
  console.log('Sarah can start her driving license 🚗')
} else {
  const yearsLeft = 16 - age;
  console.log(`Sarah is too young 🥲. Wait another ${yearsLeft} years.`)

}

const birthYear = 1986;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
//type conversion
const inputYear = '1986';
console.log(Number(inputYear) +18);
// Number is a function that converts a string to an integer. 
console.log(inputYear + 18)
// will add the 18 to the string in this case.  need to convert string to number

// console.log(Number('Mike')); // Will produce a NaN error

console.log(String(23)); //String Function converts an integer to a string


//type coercion
console.log('I am ' + 23 + ' years old' )
//The plus operator converts integers to strings automatically.

console.log('23' -'10' -3);
//The minus operater converts strings to integers.  

console.log('23' * '2')
console.log('23' / '2')
//The multiply and divide operators automatically convert to integers because that is the only way they can be used.
*/
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Mike'));
console.log(Boolean({}));
console.log(Boolean(''));

// the conversion is always implicite, not explicite, so the Boolean function is very rarely used.  It was used in this case for the understanding of truthy and falsy concepts. 

const money = 100;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log('You should get a job!');
}
// live example of truthy/falsy

let height = 10;
if(height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED')
}
// another example, but head to using a ZERO for the height. will retunr false(UNDEFINED).
*/
/*
const age = 18;
if (age === 18) console.log('You just became an adult');
if (age == '18') console.log('You just became an adult');


/// tripple equality operator is the strict comparison to the other value, it will return a boolean value, true or false. 

// loose equality operator is the double equal which does type coercion, converting an interger or string in order to make the comparison to the other value.  It will return a boolean value. 

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite)
console.log(typeof favorite);

if (favorite === 23) {
  console.log('Cool! 23 is an amazing number!')
} else if(favorite === 7) {
  console.log('7 is also a cool number')
} else if(favorite === 9) {
  console.log('9 is also a cool number')
}else {
  console.log('Number is no 23 or 7 or 9')
}

if (favorite !== 23) console.log('Why not 23?');
*/
/*
const age = 16;

console.log(age >= 20);
console.log(age < 30);
*/
/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && !hasGoodVision); 
// and operator with not operator on hasGoodVision
console.log(hasDriversLicense || hasGoodVision); 
// or operator

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive) {
  console.log('Sarah is able to drive')
} else {
  console.log('someone else should drive')
}

const isTired = false //c

console.log(hasDriversLicense && hasGoodVision && !isTired)


if(hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive')
} else {
  console.log('someone else should drive')
}
*/
/*
const day = 'blah';
console.log(day)
// switch(day) {
//   case 'monday':
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//    case 'tuesday':
//    case 'wednesday':
//      console.log('Wtrite some examples')
//      break;
//    case 'thursday':
//    case 'friday':
//    case 'saturday':
//    case 'sunday':
//      console.log('Relax')
//      break;
//      default:
//        console.log('Not a valid day!)')
    
// }
// designed for 'equality' more than a comparison tool. 

// if else condition for above
/*
if (day === 'monday') {
  console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'wednesday') {
  console.log('Wtrite some examples')

}else {
  console.log('Relax')

}
*/
/*
//Video Solution

if (day === 'monday') {
  console.log('I got the mondays')

} else if (day === 'tuesday' || day === 'wednesday' || day === 'thursday') {
  console.log('work work work')

 } else if (day === 'friday') {
console.log('work work work')
 } else if (day === 'saturday' || day === 'sunday') {
console.log('Enjoy the weekend')
 } else {
   console.log('Not a vaild Day')
 }
 */
/*
 3 + 4;
 1991;
 true && false && !false;
// all examples of expressions, the produce values in JS.

if (23 >10) {
  const str = '23 is bigger';
}
// provides a comparison but does not actually produce a value
*/
/*
const age = 30;
// Conditional (Ternary) Operator
age >= 18 ?  // condition
console.log('I like to drink whiskey 🥃') : //if statement
console.log('I like to drink water 💧'); //else statement

// this condition can be turned into a variable
const drink = age >= 18 ? 'whiskey 🥃' : 'water 💧';
console.log(drink); // and the variable can be called later

let drink2;
if(age >= 18) {
  drink2 = 'whiskey 🥃';
} else {
  drink2 = 'water 💧';
}
console.log(drink2)
//above is a comparison if else statment to prove the conditional operator has the same outcomes. 


//Ternary operator is what I need to say
//Below is a ternary operator used with a template literal 
console.log(`I like to drink ${age >= 18 ? 'whiskey 🥃' : 'water 💧'}`)

//  When you have larger blocks of code to execute based on a decision, you should be using an if else statement, where a ternary operator is used to make a quick descision and for template literls. 
*/