
console.log("Hello World!");

// Commenting on javascript code

 var number = 5; // in-line comment
/* This is a 
  multiline comment */
/* Data types and variables
Undefined, null, boolean, string, number, object

variables allows computer to store data in a dynamic way
*/
// How to declare variables
// var, let, const

// var ; declares variables throughout the whole of the program
var myName = 'Beau'
myName = 8


// let; 
let OurName = "freecodecamp"


// const; is a variable that should never change, if you try to change it then you will get an error
const pi = 3.214

/* Declaring variables and assigning variables */

var a; // This is how you declare a variable, You end all lines with a semi-colon. Its optionally though

var b = 2; //  This is how you assign a variable. The = (equal sign) is the assignement operator


a = 7;
b = a;
console.log (a)
// YOu can check what variables they are at various points in your program

/* Initialising variables with assignment operator */

 //  so the var a is declaring it and the = 9 is initialising it
var a = 9;

// Initialise these three variables, initialising the variables means defininf them
var a = 5;
var b = 10;
var c = "I am called ";

// Do not change these code below this line
a = a + 1;
b = b + 5;
c = c + "Ojok Michael Ocan"
console.log(c)
console.log(a)
console.log(b)

// Case sensitivity in variables
// we can use the camel case i.e the first letter is small and any additional word is capitalised.
// declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A string";
titleCaseOver = 9000;

// Adding numbers / sum
var sum = 10 + 10 ;
console.log(sum)

// Subtracting numbers / difference
var difference = 45 - 33;
console.log(difference)

// Multipying numbers / product
var product = 8 * 10 ;
console.log(product)

// Dividing numbers / quotient
var quotient = 66/33 ;
console.log(quotient)

// Incrementing numbers
var myVar = 87;

// Only change code below this line, to increment a number means to add 1 to it.
myVar = myVar + 1;
myVar++;
console.log(myVar)

// Decrementing numbers
var myVar = 11;
myVar = myVar - 1;
myVar--;
console.log(myVar)

// Decimal numbers, sometimes referred to as floats.

var ourDecimal = 5.7;
// Only change code below this line
var myDecimal = 0.009;

// Multiplying decimal 
var product = 2.0 * 2.5;
console.log(product)

// Divide the decimals
var quotient = 4.4 / 2.0;
console.log(quotient)

// Finding a remainder, the remainder is used to find whether the remainder is even or odd.
var remainder;
remainder = 11%3;
console.log(remainder)

// Compound Assignment with Augmented Addition
var a = 3;
var b = 17;
var c = 12;
 a += 12;
 b += 9;
 c += 7;
console.log(a)
console.log(b)
console.log(c)

// Compound assignment with Augmented subtraction
var a = 11;
var b = 9;
var c = 3;


a -=6;
b -=15;
c -=1;
console.log(a)
console.log(b)
console.log(c)

// Compound assignment with Augmented multiplication
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;
console.log(a)
console.log(b)
console.log(c)

// Compound Assignment with Augmented Division

var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /=11;                                         
console.log(a)
console.log(b)
console.log(c)

// Declare string variables
var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Beau"
var myLastName = "Carnes";


// Escaping Literal Quotes in Strings

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";

console.log(myStr)

// We can also escape using the single quote strings
var myStr = 'I am a "double quoted" string inside "double quotes"';
 console.log(myStr)

// Escape sequences in strings
/****
CODE OUTPUT
\' single quote
\" double quote
\\ backlash
\n newline
\r carriage return
\t tab
\b backspace 
\f form feed
****/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"


// Concatenating strings with Plus Operator
// Example 
var ourStr = "I come first." + "I come second.";

var myStr = "This is the start. " + "This is the end." ;
console.log(myStr);

// Concatenating strings with plus equals operator
 var ourStr = "I come first. ";
ourStr += "I come second. ";
// Only change code below this line

var myStr = "This is the first sentence. "
myStr += "This is the second sentence. "
console.log(myStr);

// Constructing strings with variables, you can concatenate strings with variables

var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is" + ourName + ", how are you?";

// trials
var myName = "Michael";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr)

// Appending variables to strings
var anAdjective = "awesome";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr)

var someAdjective;
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr)

// Find Length of string
// .length is used to measure the length of the strings
 var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// setup

var lastNameLength = 0;
var lastName = "Lovelace";
firstNameLength = lastName.length;
console.log(firstNameLength)

// Bracket Notation to find first character in string

var firstLetterOfLastName = "";
var lastName = "lovelace";

// 
firstLetterOfLastName = lastName [0];
console.log(firstLetterOfLastName)

// String Immutability
// Immutable means they cannot be altered once they are created, 


// bracket notation to find the nth 

// 
var lastName = "Michael"
var lastLetterOfLastName = lastName[lastName.length -1];
console.log(lastLetterOfLastName);

// Bracket notation fo find Nth-to-last character in string

var lastName = "Lovelace"
var secondName = lastName[lastName.length -2];
console.log(secondName)

// Mad Lib games 

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + " " + myAdverb 
  return result;
}
console.log(wordBlanks("dog","big","ran","quickly"));
console.log(wordBlanks("bike","slow", "flew", "slowly"))

// Store multiple values with arrays
var ourArray = ["John", 23];
var myArray = ["Michael", 1];
console.log(myArray)

// Nested arrays
var ourArray = [ ["the universe", 42], ["everything", 101010]];
// 
var myArray = [["Bulls", 23],["Michael", 27]]

// Access Array data with indexes
var ourArray = [50,60,70];
var ourData = ourArray[0];
console.log(ourData)

var myArray = [22,25,33];
var myDeal = myArray[0];
console.log(myDeal)



// Modify Array data with indexes
var ourArray = [18,64,99]
ourArray[1] = 45;
console.log(ourArray)

// Access multi-dimensional arrays with indexes
// bracket notation can be used to selecet an element in a multi-dimensional or array of arrays
var myArray = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
var myData = myArray[0][0];
console.log(myData)

var myArray = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
var myData = myArray[3][0];
console.log(myData)

// Manipulating arrays with push ()
var ourArray = ["Stimpson","J", "Cat"];
ourArray.push(["happy","joy"]);
console.log(ourArray)

// 
var myArray = [["John",23],["Cat",2]];
myArray.push(["dog",3])
console.log(myArray)

// Manipulate Arrays with Pop

// W3Schools 
