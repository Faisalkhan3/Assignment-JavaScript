// ************  CHAPTER 01 ALERT *********************
// Q # 01
alert("Welcome to Jawan PAkistan")

// Q # 02
alert("Error! Please enter a valid password")

// Q # 03
alert("Welcome to JS land... \nHappy Coding")

// Q # 04
alert("Welcome to JS land...")
alert("Happy Coding")

// Q # 05
alert("Hello.... ican run JS through my web browser's console") /* ran it through console */

// Q # 06
// done in html file



// ************  CHAPTER 02  Variable For String *********************
// Q # 01
var userName;

// Q # 02
var myName = "Faisal Amin";

// Q # 03
var message = "Hello World"
alert(message)

// Q # 04
var studentName = "Fasial Amin"
var studentAge = 28
var studentQualification = "Full stack Developer"
alert(studentName)
alert(studentAge)
alert(studentQualification)

// Q # 05
var Pizas = " PIZZA \n PIZZ \n PIZ \n PI \n P "
alert(Pizas)

// Q # 06
var Email = "faisalkhan26@gmail.com"
alert("My Email address is " + Email)

// Q # 07
var book = "A smart way to learn JavaScript"
alert("I am Typing to learn from the BOOK " + book)

// Q # 08
document.write("Yah! I can write HTML content through JavaScript")

// Q # 09
var design = ""
document.write(design)
alert(design)





// ************  Chapter 3 (Variables for numbers) *********************
// Q # 01 Declare a variable “caseQty”
var caseQty;

// Q # 02 Assign to the variable caseQty, which has already been declared, the value 144.
caseQty = 144;

// Q # 03 Rewrite this statement so the variable can be used in a math operation. var num = "9";
var num = "9";

// Q # 04 In one statement declare a variable. In a second statement assign it the sum of 2 numbers.
var sum;
sum = 2 + 5;

// Q # 05 What is the value of orderTotal?
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
console.log(orderTotal)

// Q#06 In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number.
var marks = 34;
var totalMarks = marks + 14;



// ************  Chapter 4 (Variable names Legal and Illegal)  *********************
// Q # 01 Correct this statement.
var productCost = 3.45;

// Q # 02 Correct this statement.
var nameOfband;

// Q # 03 In a single statement declare a legally-named variable and assign a number to it.
var FaisalAmin = 21;

// Q # 04 Declare a variable that is a combination of your first and last names. Use camelCase.
var faisalAmin;

// Q # 05 List the legal and Illegal Variables.
/* legal variable : var name ; var play1 ; var universityLiboratory;
   illegal variable : var var ; var 1play; var university libeoratory;*/



// ************  Chapter 5 (Math Expression I)  *********************
// Q#01 What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?
// % Modulus (shows the reminder after division)

// Q#02 What is the value of num?
var num = 20 % 6;

// Q#03 In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000.
var largeNum = 1000 * 2000;

// Q#4 Assign to a variable the value represented by one variable subtracted from the value represented by another variable
var num1 = 30;
var num2 = 20;
var resultSubnum = num1 - num2;

// Q#5 Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name.
const myRemainder = 10 % 4;
console.log(myRemainder)

// Q # 06 Code an alert that displays the result of a multiplication on 2 numbers.
var mult = 23 * 2
alert(mult)


// ************  Chapter 6 (Math Expression II)  *********************
// Q # 01 Code a short form of x = x + 1; Use either of the two legal expressions.
let x2 = 6;
x2 += 1;
console.log(x2);
// Using the x++ expression
x2++;
console.log(x2);


// Q # 02 If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
let x4 = 100;
// Using the x -= 1 expression
x4 -= 2;
console.log(x4);
// Using the --x expression
--x4;
console.log(x4);


// Q # 03var x = 50;
// var y = x++;
// What is the value of y?
var x = 50;
var y = x++;
console.log(y) /*value of y will 51 but shows 50 */


// Q # 04 var y = 50;
// var z = --y;
// What is the value of z?
var y = 50;
var z = --y;
console.log(z) /*the value of z will be 49 */


// Q # 05In a single statement, decrement num and assign its original value 
// to newNum.
var sNumb1 = 34;
var sNumb2 = --sNumb1;


// Q # 06In a single statement add 1 to a variable and assign its original 
// value to another variable.
var sNumb1w = 34;
var sNumb2w = ++sNumb1;


// Q#07:  Assign a number value to a variable.
// Increment the variable.
// Display the new value in an alert
var newNum = 34;
var newNum2 = ++sNumb1;
alert(newNum2)


// ************  Chapter 7 (Math Expression III)  *********************
// Q # 01var calculatedNum = 2 + (2 * 6);
// What is the value of calculatedNum?
var calculatedNum = 23 + (25 * 6);
console.log(calculatedNum)

// Q # 02. var calculatedNum = (2 + 2) * 6;
// What is the value of calculatedNum?
var calculatedBrac = (26 + 52) * 8;
console.log(calculatedBrac)

// Q # 03 var calculatedNum = (2 + 2) * (4 + 2);
// What is the value of calculatedNum?
var calculatedDbrac = (4 + 4) * (8 + 4);
console.log(calculatedDbrac)

// Q # 04 var calculatedNum = ((2 + 2) * 4) + 2;
// What is the value of calculatedNum?
var calculatedMbrac = ((43 + 6) * 3) + 6;
console.log(calculatedMbrac)

// Q # 05. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, 
// clarified with parentheses, producing 56.
var cost3 = (2 + 2) * (4 + 10);
console.log(cost3)

// Q # 06 Write a statement that assigns to units the result of 2 + 2 * 4 + 10, 
// clarified with parentheses, producing 20
var unit3 = 2 + (2 * 4) + 10;
console.log(unit3)

// Q#7 Write a statement that assigns to pressure the result of 4 / 2 * 4, 
// clarified with parentheses, producing 5
var pressure3 = (4 / 2) * 4 - 3;
console.log(pressure3)



// ************  Chapter 8 (Concatenating Text Strings) *********************
// Q # 011.	var num = "2" + "2";
// What is the value of num? Include quotation marks.
var num = "2" + "2";
console.log(num) /*the value will be 22*/

// Q # 022.	message = ("Hello," + "Dolly");
// What is the value of message? (Include the quotation marks.)
// Alert the statement
message = ("Hello," + "Dolly");
alert(message) /*Hello, Dolly */

// Q # 033.	alert("33" + 3);
// What message displays in the alert box?
alert("33" + 3); /* it shows  333*/

// Q # 04 Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".
var one = "Pakistan"
var two = "Zindabad"
alert(one + two)

// Q # 05 Write a statement that assigns to a variable the concatenation of a string with a number
var num = 2;
var stringa = "i have "
alert(num + stringa + " rabbits")

// Q # 06
var fisrtName = "Faisal"
var lastName = "Amin"
var results = fisrtName + lastName;





// ************  Chapter 9 (Prompts)  *********************
// Q#11.Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
var fisrtNama = prompt("Enter Your first name")

// Q#2 Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.
var country = prompt("Countrey", "China")

// Q # 03 Correct this statement
// var yourName = prompt(Enter Your Name");
var yourName = prompt("Enter Your Name");

// Q # 04 Code a prompt that specifies a string as the message Include a default input.
var yourName = prompt("Enter Your Name");
yourName.value = "Enter your Name"

// Q # 05 Assign strings to two variables. Code a prompt specifying the first 
// variable as the message and the second variable as the default 
// response. Assign the user's response to a third variable.
var firstPrompt = prompt("Enter your Querry")
var secondDefault = " it will be solve in 2 working hours"
var resultResponse = firstPrompt + secondDefault
console.log(resultResponse)

// Q # 06Display a prompt, including both a message and a default 
// response.
// Display the user's response in an alert.
var firstPrompt = prompt("Enter your Querry")
var secondDefault = " it will be solve in 2 working hours"
var resultResponse = firstPrompt + secondDefault
console.log(resultResponse)


// ************  Chapter 10 (if statments) *********************
// Q # 01
var city = "Karachi"
if (city = "Karachi") {
    console.log("The City OF Lights")
}
// Correct the above statement:
// Also try this statement by yourself
var city = "Lahore"
if (city = "Lahore") {
    console.log("The Heart of Pakistan")
}


// Q # 02
// This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box 
// that asks the user value of z? and assign it to another variable.
var x = 10
var y = 10
var z = 20
if (x === y) {
    console.log(z)
}


// Q # 03Code an if statement that tests if ZipCode is "10010" so, Alert 
// that "Karachi". if not then alert ("Please write correct city")
var ZipCode1 = +prompt("Enter your zip code")
if (ZipCode1 === 10010) {
    console.log("karachi")
}

// Q # 04 Code an if statement. Test whether a variable has a particular 
// numerical value. If so, assign a new value to that variable, as in 
// x = 1;
var x = 1;
if (x === 1) {
    var y = 4;
    x = y;
}
console.log(x);



// ************  Chapter 11 (Comparison Operators) *********************
// Q # 01: Code the first line of an if statement that tests whether one 
// variable is unequal to another. (Use !)
var answer22 = prompt("answer no 3")
if (answer22 !== 55) {
    console.log(!true)
}

// Q # 02:  Code the first line of an if statement that tests whether the 
// value represented by a variable is greater than or equal to the 
// value represented by another variable
var valueOfnum = prompt("Enter value")
var actualValue = 23
if (valueOfnum > actualValue) {
    console.log("Acceptable")
}

// Q # 03: Code an if statement. Test whether a variable is unequal to a 
// particular number. If so, assign a number to that variable.
var enterNumber = prompt("enter number")
if (enterNumber !== 70) {
    console.log(enterNumber)
}

// Q # 04
var enterNumber = prompt("enter number")
if (enterNumber !== 60) {
    alert("congratulations")
}

// Q # 05. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered 
// is unequal to another name.
// If the condition is true (it will be), display an alert that says "No 
// match"
var firstName3 = prompt("What is your first name?")
firstName3.toLowerCase();
if (firstName3 !== faisal) {
    alert("No, match")
}


// ************  Chapter 12 (if…else and else if statements)*********************

// Q # 01: Code an if statement that tests whether the value represented by 
// a variable is greater than or equal to the value represented by 
// another variable. If so, display an alert. If not, display a different 
// alert.
var promptValueOf = prompt("enter the value pleaseee")
var valueOfstring = 44;
if (promptValueOf >= valueOfstring) {
    alert("Eligible")
}
else {
    alert("Sorry! not eligible")
}

// Q # 02: Write a program using if else and else if statement which take 
// marks from user. And the program will calculate your percentage 
// and give you grade A/C to Your percentage. (MARKSHEET)


// Q # 03 This is the if statement that begins the code.
// if (a === 10) {
//     alert("a is 10");
//    }
//    If a isn't 10, display an alert that says The correct value of a is
//    Note: Try this by yourself
var a4 = prompt("enter value of a")
if (a === 10) {
    alert("a is 90");
}
else {
    alert("correct the value of a")
}

// Q # 04: Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it's Lahore.
// If it is, display an alert acknowledging it's Lahore.
// Otherwise, display a different alert.
var citynumberenter = prompt("Enter your City")
citynumberenter.toLowerCase();
if (citynumberenter === "karachi") {
    alert("Karachi City of Light")
}
else if (citynumberenter === "lahore") {
    alert("lahore City of PAkistan's Heart")
}
else {
    alert("nice City")
}


// ************  Chapter 13 (Testing sets of conditions)*********************
// Q # 01:Code the first line of an if statement that tests whether both are 
// true: a has the same value as b and c has the same value as d.
var a = 2
var b = 2
var c = 3
var d = 3
if ((a === b) && (c === d)) {
    alert("contion are " + true)
}

// Q # 02: Code the first line of an if statement that tests whether either or 
// both are true: a has the same value as b or c doesn't have the 
// same value as d.
var a = 2
var b = 2
var c = 3
var d = 3
if ((a === b) || (c === d)) {
    alert("contion are " + true)
}

// Q # 03:Code the first line of an if statement that tests whether 
// I. name is either "Hamza" or "Arsalan".
// II. age is Less than 60.
var namyLash = prompt("Enter your NAme")
var nnn = namyLash.toLowerCase();
var ageLAsh = +prompt("Enter Age please")
if ((nnn === "hamza") || (namyLash === "arsalan")) {
    if (ageLAsh < 60) {
        alert("eligible")
    }
}


// Q # 04: Declare two variables and assign them number values.
// If the first variable is less than the second variable or greater than 
// the second variable, display an alert.
var firstNumber = 33
var secondNumber = 22
if (firstNumber !== secondNumber) {
    alert("not equal")
}

// Q # 05 Declare 2 variables. Assign one of them your first name and the 
// other one your last name.
// Code 2 prompts, asking for your first and your last name.
// If your answers match the two variables, display an alert.
var firstNameYours = "faisal"
var secondNAmeyours = "amin"
var firstPromptN = prompt("Enter your First name")
var secondPromptN = prompt("Enter your second name")

if (firstNameYours === firstPromptN) {
    if (secondNAmeyours === secondPromptN) {
        alert("correct")
    }
}



// ************  Chapter 14 (If statements nested)  *********************
// Q # 01 Code an if statement enclosing a nested if. If password is not 
// empty, then check if password is not greater than 5 , then display 
// an alert that says "Password must be greater than 5" if greater 
// than 5 then Alert "OK"


// Q # 02 Try this statement by yourself
// if (a === 1) {
//     if (c === "Max") {
//      alert("OK");
//      }
//     }
var sabri = prompt("enter your points ")
var catche = prompt("enter your subject ")
if (sabri === 3) {
    if (catche === "Math") {
        alert("Done");
    }
}


// Q # 03Code the first line of an if statement that avoids the nesting above 
// by testing for multiple conditions.
// if (a === 1) {
//  if (c === "Max") {
// alert("OK");
//  }
// }
let a = 4;
let c = "Myth";
if (a === 4 && c === "Myth") {
    alert("OK");
}

// Q # 04

// ************  CHAPTER 15 ARRAY 1 *********************
// Q # 01 Declare an empty array
var array = [""];

// Q # 02Code an array with 1 string element
var array1 = ["apple"]

// Q # 03 var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert 
// using array index
var alphabet2 = ["h", "i", "j", "k"]
alphabet2.length(2)
alert(alphabet2)


// Q # 04. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total 
// length of array.
var alphabet5 = ["h", "i", "j", "k", "l", "m", "n", "o"]
length = alphabet5.length
console.log(length)


// Q # 05 Declare an array with one element and Add a second element
// with index in array. Create an alert whose message is the new 
// element
var arrayOne = ["apple"]
var newArray = [arrayOne, "banana"]
alert(newArray)


// ************  CHAPTER 16  ARRAY 11*********************
// Q # 01. Code an array with 1 string element.
// Add an additional element to the array using push.
// Create an alert whose message is the last element.
var object = ["apple", "mango", "banana"]
var newObject = object.push("pinapple")
alert(object)


// Q # 02 var Alphabet=["h","i","j","k"]
// Remove the last element from the array Alphabet
var Alphabet = ["h", "i", "j", "k"]
Alphabet.pop()
alert(Alphabet)


// Q # 03 var Alphabet=["h","i","j","k"]
// Add a new element, a number, to the end of an array.
var Alzphabet = ["h", "i", "j", "k"]
Alzphabet.push(23)
console.log(Alzphabet)


// ************  CHAPTER 17 to 20  *********************
// Q # 01
// Q # 02
// Q # 03
// Q # 04
// Q # 05
// Q # 06

// ************ Chapter 21 (Changing Case) *********************
// Q # 01. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.
var userInput = prompt("Enter Your City?")
var allLower = userInput.toLowerCase;
if (userInput === karachi) {
    console.log("The City of Light")
}
else if (userInput === lahore) {
    console.log("A heart of PAkistan")
}


// Q # 02 Convert the string represented by x to lower-case and assign the 
// result to the same variable
var x = "KarachI"
x = x.toLowerCase();
alert(x)

// Q # 03 Convert the string represented by y to upper-case and assign the 
// result to the same variable.
var y = "KarachI"
y = y.toUpperCase();
alert(y)

// Q # 04Convert the string represented by a variable to lower-case and 
// assign the result to a second variable that hasn't been declared 
// beforehand.
var upperCase = "KARACHI"
var lowerCase = upperCase.toLowerCase();
alert(lowerCase)


// Q # 05 Convert the string represented by an array element to lower-case 
// and assign it to a variable that hasn't been declared beforehand.


// Q # 06. Display in an alert the upper-case version of the string 
// represented by a variable.
var beta = "karachi"
beta = beta.toUpperCase();
alert(beta)


// Q # 07 var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is 
// the writing of a word with its first letter in uppercase and the 
// remaining letters in lowercase.
var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase()
alert(cityName)



// ************  CHAPTER 22 to 25 STRING *********************
// Q # 01captain" has been assigned to variable “sameWords”. You want 
// to slice "ap" out of it.
var sameWords = "captain";
sameWords = sameWords.slice(1, 3)
alert(sameWords)


// Q # 02 The number of characters in the string will be assigned to the 
// variable.
var school = "PN model School"
var charSchool = school.length()
alert(charSchool)


// Q # 03 The string "elephant" has been assigned to the variable animal. 
// Slice the four middle characters out of the string and assign it to 
// the variable seg, which hasn't been declared beforehand.
var animal = "elephant"
var seg = animal.slice(0, 4)
alert(seg)


// Q # 04. Find the number of characters in the string represented by a 
// variable and assign the number to a second variable.
var schoolart = "PN model School"
var charSchoolart = schoolart.length()
alert(charSchoolart)


// Q # 05In a first statement measure how many characters there are in a 
// string represented by a variable. In a second statement slice all 
// but the first character and last 3 characters of the string and 
// assign it to a second variable that hasn't been declared 
// beforehand.
var nameCity = "Manchester United"
// var newNameCity= nameCity.length()
// console.log(newNameCity)
var sliceNameCity = nameCity.slice(0, 1)
var sliceNameCity2 = nameCity.slice(14, 17)
alert(sliceNameCity + sliceNameCity2)


// Q # 06var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?
var text = "To be or not to be.";
var indx = text.indexOf("be");
alert(indx)
// the answer will be 3

// Q# 07 var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
var text1 = "To be or not to be.";
var indx1 = text1.lastIndexOf("be");
alert(indx1)


// Q# 08 Find the index of the first character of the last instance of "go" in 
// the string represented by the variable text and assign the number 
// to the variable indx, which hasn't been declared beforehand.
var text = "Pride of Indigo"
var indx2 = text.indexOf("go")
alert(indx2)


// Q# 09 Code the first line of an if statement that tests whether a segment 
// with an index represented by indexNum exists in a string.
var userInput2 = +prompt("enter your age")
if (userInput2 === 26) {
    console.log(true)
}


// Q# 10In this string "abcde", what character is at index 2?
var stringDot = "abcde"
stringDot = stringDot.charAt(2)
alert(stringDot)
//  c is in char 2


// Q #11Find the 10th character in the string represented by text and 
// assign it to the variable cha, which hasn't been declared 
// beforehand.
var textOne = "I am a Web Developer"
var cha = textOne.charAt(10)
alert(cha)


// Q #12Find the last character in the string represented by str and 
// assign it to x, which hasn't been declared beforehand.
var str11 = "NewYork"
var x1 = str11.charAt(str11.length - 1)
alert(x1)


// Q #13Find the the 5th character in a string represented by input 
// and assign it to cha, which hasn't been declared beforehand.
var input11 = "NewYork"
var cha11 = input11.charAt(4, 5)
alert(cha11)



// Q #14Code the first line of an if statement that tests whether the 
// 3rd character of a string represented by a variable is a particular 
// character.
var castName = "Rajputi"
if (castName.charAt(2) === "j") {
    console.log(true)
}

// Q #15Code a for loop that cycles through all the characters of a 
// string represented by a variable and assigns each character to an 
// element of an array that has been declared beforehand.
// In the string represented by reply replace the first instance of "no" 
// with "yes" and assign the revised string to revisedReply, which hasn't 
// been declared beforehand.
var str23 = "Excitement";
var arr23 = [];
for (var i = 0; i < str.length; i++) {
    arr23[i] = str23.charAt(i);
}
console.log(arr23);

var reply = "no, I cant do this";
var revisedReply = reply.replace("no", "yes");
console.log(revisedReply);



// Q #In a string represented by str replace the first instance of "1" 
// with "one" and assign the revised string to newStr, which hasn't 
// been declared beforehand.
var strone = "one"
var newStr1 = strone.replace("one", 1)
alert(newStr1)


// Q #17If you want all instances replaced, enter 3 characters that 
// need to appear in this statement.
// var y = x.replace("a", "z");
var x = "aebra"
var y = x.replace("a", "z");
alert(y)




// ************  CHAPTER 26 Rounding Number *********************
// Q # 01Form a statement that rounds a number to the nearest integer.
var numberFraction = 23.444
Math.round(numberFraction)

// Q # 02 Round up a number represented by origNum and assign it to 
// roundNum, which hasn't been declared beforehand.
var numberFraction1 = 23.444
Math.ceil(numberFraction1)


// Q # 03Round down a number represented by origNum and assign it to 
// roundNum, which hasn't been declared beforehand.
var numberFraction2 = 23.444
Math.floor(numberFraction2)


// Q # 04 Round a number represented by a variable and assign the result 
// to a second variable that hasn't been declared beforehand
var numberFraction = 23.444
var newNumberfrac = Math.round(numberFraction)
alert(newNumberfrac)


// Q # 05 Round .5 to 0 and assign it to a variable that hasn't been declared 
// beforehand
var numberunique = 0.5
var numberunique1 = Math.floor(numberunique)


// ************  CHAPTER 27 Random Numbers *********************
// Q # 01 Convert a random number generated by JavaScript to a number in 
// the range 1 to 50
var randomNumber = Math.floor(Math.random() * 50) + 1;

// Q # 02Generate a random number and assign it to a variable that hasn't 
// been declared beforehand.
var generateNum = Math.random()
alert(generateNum)

// Q # 03 You have to create a dice in JavaScript with the use of pseudo-random number.


// Q # 04 You have to create a toss (head/tail) in JavaScript with the use of 
// pseudo-random number.



// ************  CHAPTER 28-29 Converting String *********************
// Q # 01 How do you convert a string to an integer in JavaScript?
var Stringnum = "1"
Stringnum = Number.parseInt(Stringnum)


// Q # 02 Write a JavaScript function to convert the string "123" to an 
// integer
function stringToInt(str) {
    var intVal = parseInt(str);
    return intVal;
}
var result = stringToInt("123");


// Q # 03 How can you convert a string containing a decimal number to a 
// floating-point number in JavaScript?



// Q # 04
// Q # 05
// Q # 06



// ************  CHAPTER 30  (Controlling the length of decimals)*********************

// Q # 01 Code a statement that rounds a number represented by num to 4 
// places, converts it to a string, and assigns it to newNum, which 
// hasn't been declared beforehand
var num5 = 6.14159265359;
var newNum7 = num5.toFixed(4).toString();
console.log(newNum7);


// Q # 02:  In a single statement round a number represented by a variable to 
// 2 places, convert it to a string, convert it back to a number, and 
// assign it to the same variable.
var numb8 = 3.14159;
var nawaNumb = numb8.toFixed(2).toString();
nawaNumb = Number.parseInt(nawaNumb)

// Q # 03 Code the first line of an if statement that tests whether the 
// number represented by num, rounded to 2 digits and converted 
// to a string, has more than 4 characters in it.
var testedNum2 = 23.354
var newTestedNum = testedNum2.toFixed(2).toString();
if (newTestedNum === "23.35") {
    alert("yes")
}

// Q # 04: Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal 
// places and converted to a string
var numb8 = 3.1415934535;
alert(numb8.toFixed(2).toString())


// ************  Chapter 31 - 34 (Date & Time) *********************
// Q # 01: Code a statement that creates a new Date object and assigns it to 
// dObj, which hasn't been declared beforehand.
var dObj = new Date();


// Q # 02: Code a statement that creates a new Date object, converts it to a 
// string, and assigns the string to dStr, which hasn't been declared 
// beforehand.
var dObj = new Date();
var dStr = dObj.toString();


// Q # 03:// Code a statement that extracts the day of the week from a Date 
// object represented by d and assigns it to day, which hasn't been 
// declared beforehand.
var date = new Date();
var day = date.getDay();
alert(day);


// Q # 04
var date1 = new Date();
var day1 = date1.getDay();
var arrayDate = " Sunday"
alert("Today is " + day1 + arrayDate);

// Q # 05:
var d = new Date();

var year = d.getFullYear();
var month = d.getMonth() + 1;
var day = d.getDate();
var dayOfWeek = d.getDay();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
var milliseconds = d.getMilliseconds();

// Q # 06 Code a statement that creates a Date object for the last day of the 
// last month of 2020 and assigns it to later, which hasn't been 
// declared beforehand.
var later = new Date(2020, 11, 31);


// Q # 07: Create a Date object for the second day of the second month of 
// 1992 and assign it to a variable that hasn't been declared 
// beforehand.
var date2 = new Date("February 2, 1992");
// or
var date3 = new Date(1992, 1, 2)


// Q # 08:Code a single statement that displays in an alert the milliseconds 
// that elapsed between the reference date and the beginning of 
// 1980.
var referenceDate = new Date();
var beginningOf1980 = new Date("January 1, 1980");
var millisecondsSince1980 = referenceDate - beginningOf1980;
alert(millisecondsSince1980);


// Q # 09: How do you change the year of a date in JavaScript?
var myDate = new Date('2021-09-15');
myDate.setFullYear(2022);
console.log(myDate.getFullYear());


// Q # 10:Write a JavaScript function to change the month of a given 
// date to January.
var myDate = new Date('2023-09-15');
function changeMonthToJanuary(date) {
    date.setMonth(0);
    return date;
}
console.log(changeMonthToJanuary(myDate));


// Q # 11:What is the method to change the day of the week for a 
// specific date in JavaScript?
let myDate = new Date('2021-09-15');
console.log(myDate.getDay());
myDate.setDate(myDate.getDate() - 2);
console.log(myDate.getDay());


// Q # 12: Write a JavaScript function to change the minutes of a given 
// time to a specific value. (Value by prompt
function changeMinutes(time) {
    let newMinutes = prompt("Enter the new value for minutes:");
    time.setMinutes(newMinutes);
    return time;
}
let myTime = new Date('2021-09-15T12:30:00');
console.log(changeMinutes(myTime));


// Q # 13Write a JavaScript function to add a specific number of 
// hours to a given time.
function addHours(time, hours) {
    time.setTime(time.getTime() + (hours * 60 * 60 * 1000));
    return time;
}
let myTime2 = new Date('2021-09-15T12:30:00');
console.log(addHours(myTime2, 2));


// Q # 14You have to create a age calculator in JavaScript
function calculateAge(birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
var birthDate = new Date('1994-10-22');
console.log(calculateAge(birthDate))




// ************  CHAPTER 35-37  (Functions)  *********************
// Q # 01Code the first line of a function displayAlert.
function displayAlert() {
    alert("Hello, world!");
}

// Q # 02 Code a function named askName that prompts the user to "Enter 
// name" and assigns the answer to userName, which hasn't been 
// declared beforehand.
function askName() {
    var userName1 = prompt("Enter name:");
    console.log("Hello" + userName1);
}
askName();


// Q # 03: Code a function that calls 2 other functions.
function functionA() {
    console.log("This is function A");
}
function functionB() {
    console.log("This is function B");
}
function doSomething() {
    functionA();
    functionB();
}
doSomething();


// Q # 04: Code a function that displays a prompt, "Enter name" and then 
// displays the name in an alert. Call the function.
function showNamePrompt() {
    var name = prompt("Enter name");
    alert(`Hello, ${name}!`);
}
showNamePrompt();


// Q # 05:Code the first line of a function named concat that has 3 
// parameters, the first three letters of the alphabet. Call that takes 
// a variable, a string, and a number as arguments.
function concat(a, b, c, variable, string, number) {
    var result = a + b + c + variable + string + number;
    return result;
}
var output = concat("a", "b", "c", myVar, "hello", 123);
console.log(output);

// Q # 06:Code a function that has 2 parameters. Concatenate them and 
// assign the result to a variable that hasn't been declared 
// beforehand.
function concatenateStrings(str1, str2) {
    var result = str1 + str2;
    return result;
}
var myResult = concatenateStrings("Hello", "World");
console.log(myResult);


// Q # 07Code a function that has three parameters. Multiply them and 
// assign them to a variable that hasn't been declared yet.
function multiplyNumbers(num1, num2, num3) {
    var result = num1 * num2 * num3;
    return result;
}
var myResult = multiplyNumbers(2, 3, 4);
console.log(myResult)

// Q # 08 Write a JavaScript function that takes an array of numbers as 
// input and returns the average of those numbers.
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
}
var numbers = [1, 2, 3, 4, 5];
var average = calculateAverage(numbers);
console.log(average);

// Q # 09 Write a JavaScript function that takes two parameters and returns 
// their sum.
function sumTwoNumbers(a, b) {
    var sum = a + b;
    return sum;
}
var number1 = 30;
var number2 = 20;
var sum = sumTwoNumbers(number1, number2);
console.log(sum);
console.log(sumTwoNumbers(4, 7));

// Q # 10Write a JavaScript function that takes an array of numbers as 
// input and returns the average of those numbers.
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
}
var numbers = [2, 4, 6, 8, 10];
var average = calculateAverage(numbers);
console.log(average);


// Q # 11You have to capture the returned value from a function and 
// store it in a variable?
function sumTwoNumbers(a, b) {
    var sum = a + b;
    return sum;
}
var number1 = 10;
var number2 = 20;
var sum = sumTwoNumbers(number1, number2);


// Q # 12Write a function which tells letter counts of (word).
function letterCounts(word) {
    var counts = {};
    for (var i = 0; i < word.length; i++) {
        var letter = word[i];
        if (counts[letter]) {
            counts[letter]++;
        } else {
            counts[letter] = 1;
        }
    }
    return counts;
}
var word = "banana";
var counts = letterCounts(word);
console.log(counts);

// Q # 13Write a function to set (year) in date object.
function setDateInDateObject(year) {
    var currentDate = new Date();
    var newDate = new Date(year, currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds(), currentDate.getMilliseconds());
    return newDate;
}
var year = 2022;
var dateObject = setDateInDateObject(year);
console.log(dateObject)

// Q # 14Write a function which tells the age of a person who Born on 
// (dateOfBirth)
function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthdate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}
const age = calculateAge('2000-01-01');
console.log(age);


// Q # 15Write a function which tells the presense of (word) in an 
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false
function checkPresence(word, array) {
    return array.includes(word);
}
const array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
console.log(checkPresence('haris', array));
console.log(checkPresence('ali', array));


// Q # 16Write a function which repeat (letter) 10 times.
// Hint: "abcde" str.repeat(10)
function repeatLetter(letter) {
    return letter.repeat(10);
}
console.log(repeatLetter('a'));
console.log(repeatLetter('b'));
console.log(repeatLetter('c'));


// Q # 17:write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()
function reverseArray(array) {
    return array.reverse();
}
const array = ['a', 'b', 'c', 'd', 'e'];
console.log(reverseArray(array));




// ************  CHAPTER 38 LOCAL AND GLOBAL VARIABLE *********************
// Q # 01Write a JavaScript function that demonstrates the usage of a local 
// variable.
function calculateArea(radius) {
    var pi = 3.14; // local variable
    var area = pi * radius * radius;
    return area;
}
var result2 = calculateArea(1);
console.log(result2)

// Q # 02How can you access a global variable inside a function in 
// JavaScript?
var globalVar = "Pakistan";

function func() {
    console.log(globalVar); // Outputs: Hello World
}
func();





// ************  CHAPTER 39-40 Switch Statement  *********************
// Q # 01 Write a JavaScript switch statement that checks the value of a 
// variable and performs different actions based on different cases.
var Num = +prompt("enter the Number")
var status = "Congurates! "
var status2 = "Sorry! "

switch (Num) {
    case 1:
        status += " You are pass";
        console.log(status)
        break;
    case 2:
        status += " You are on process";
        console.log(status)
        break;
    case 3:
        status += " You are selected";
        console.log(status)
        break;
    case 4:
        status += " You are fail";
        console.log(status)
        break;
    default:
        console.log("Better luck next time")
        break;
}



// Q # 02 Write a JavaScript switch statement that check whether cityName 
// given by user check the cityName if match alert the user and 
// break the statement, if not default message will be shown to user
var cityName = prompt("Enter the City")
cityName = cityName.toLowerCase()
switch (cityName) {
    case "karachi":
        console.log("city of light")
        break;
    case "lahore":
        console.log("Heart of Pakistan")
        break;
    default:
        console.log("Not in Pakistan")
        break;
}


// ************  Chapter 41, 42 (while loops, do…while loops)  *********************
//Q#1Write a Code that runs twice and does nothing. The counter i has already been declared and assigned 0.
for (let i = 0; i < 2; i++) {
    // do nothing
}

//Q#2Code that looks for "pig" in the array. When it finds it, an alert displays saying, "Found it!" Use the length of the array as the loop limiter. Break out of the loop when it's found.
//var animals=["horse", "ox", "cow", "pig", "duck"];
var animals = ["horse", "ox", "cow", "pig", "duck"];
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "pig") {
        alert("Found it!");
        break;
    }
}


// Q # 033.	Code to use a while & do while loop to print the numbers from 1 to 10
// freestar

// Write a Code that runs twice and does nothing. The counter i has already been declared and assigned 0. javascript

for (let i = 0; i < 2; i++) {
    // do nothing
}
// 2.	Code that looks for "pig" in the array. When it finds it, an alert displays saying, "Found it!" Use the length of the array as the loop limiter. Break out of the loop when it's found.

var animals = ["horse", "ox", "cow", "pig", "duck"];

for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "pig") {
        alert("Found it!");
        break;
    }
}
// while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
// do-while loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 10);


//Q#4To use a while loop to ask the user for a number and then print that number back to them.
// using while loop to ask user for a number
let num;
while (num === undefined) {
    num = prompt("Enter a numb");
}
console.log(`The number you entered is ${num}.`);


// Q # 055.	To use a while loop to check if a number is even or odd.
let num = 5;
while (num !== 0) {
    if (num % 2 === 0) {
        console.log(`${num} is an even number.`);
    } else {
        console.log(`${num} is an odd number.`);
    }
    num--;
}


//Q#6 Create a guessing game where the user has to guess a number between 1 and 100.
const secretNumber = Math.floor(Math.random() * 100) + 1;
var guess = 0;
var numGuesses = 0;
while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    numGuesses++;
    if (guess < secretNumber) {
        alert("Too low!");
    } else if (guess > secretNumber) {
        alert("Too high!");
    } else {
        alert(`Congratulations, you guessed the number in ${numGuesses} tries!`);
    }
}


// Q # 07Use a while & do-while loop to create a countdown timer?
var count = 10;
while (count >= 0) {
    console.log(count);
    count--;
}
console.log("Blast off!");

var count = 10;
do {
    console.log(count);
    count--;
} while (count >= 0);
console.log("Blast off!");



// ************  Chapter 46, 48 (Events)CHAPTER 46  *********************
//Q#01 Create a simple event that prints a message when the user clicks on an element.
const itsButton = document.getElementById("myButton");
myButton.addEventListener("click", function () {
    console.log("Button clicked!");
});


//Q#2 Create an event that hides an element when the user clicks on a different element
const hideButton = document.getElementById("hideButton");
const text = document.getElementById("text");
hideButton.addEventListener("click", function () {
    text.style.display = "none";
});
document.addEventListener("click", function (event) {
    if (event.target !== hideButton) {
        text.style.display = "block";
    }
});


//Q#3 Create a link that changes color when the user hovers over it and then back to its original color when the user moves the mouse away.
const myLink = document.getElementById("myLink");
myLink.addEventListener("mouseover", function () {
    myLink.style.color = "red";
});
myLink.addEventListener("mouseout", function () {
    myLink.style.color = "blue";
});

const myLink = document.getElementById("myLink");
myLink.addEventListener("mouseover", function () {
    myLink.classList.add("hover");
});
myLink.addEventListener("mouseout", function () {
    myLink.classList.remove("hover");
});

//Q#04Create an event that scrolls to the top of the page when the user clicks on a link.
const scrollToTopLink = document.getElementById("scrollToTopLink");
scrollToTopLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Q # 055.	Create a link that plays a sound when the user clicks on it.
function playSound() {
    const audio = document.getElementById("myAudio");
    audio.play();
}


//Q#6Create a simple link that opens a new window when clicked.
function openNewWindow() {
    window.open("https://www.example.com","newWindow","width=600,height=400,top=100,left=100");
}

//Q#7Create a link that opens a new window when the user clicks on it and then closes the window when the user clicks on a close button in the new window. The size of the new window should be determined by the user's mouse position.




// ************  CHAPTER 49-50 *********************
// Q # 01:Read the value of a user Input and print it to the console.
var userInput = prompt("Enter your name")
console.log(userInput)
// or
var inputFieldTH = document.getElementById("inputforjs")
console.log(inputFieldTH)

// Q # 02:Read the value of a checkbox and print it to the console
var checkBox1 = prompt("enter your age")
if (checkBox1 === 20) {
    console.log("its eligible")
}


// Q # 03


// Q # 04Place some text in a field. Make up an id for the field.
var Elemento = document.createElement("h1")
var texto = document.createTextNode("Hi how are you")
Elemento.appendChild(texto)
Elemento.setAttribute("id", "Heading1")


//Q#05Ask the user about Martial Status. If the variable married is false, place the value "available" in the field with the id "status"
var statusmartial = prompt("Are you married")
statusmartial.toLowerCase();
if (statusmartial === "yes") {
    console.log("not eligible")
}
else if (statusmartial === "no") {
    console.log("eleigible for marriage")
}


// Q # 06:If a input is empty, fill it with a string.
var emptyInput = document.getElementById("inputforjs")
emptyInput.value = "Hi Hello"


// Q#7 Create a Registeration Form with Validation.
const form1 = document.getElementById("form")
const name1 = document.getElementById("name")
const fatherName1 = document.getElementById("FatherName")
const Email1 = document.getElementById("Email")
const password1 = document.getElementById("password")
const gender1 = document.getElementById("gender")
const Nationsality1 = document.getElementById("Nationsality")



// ************  Chapter 51 (Reading and Setting paragraph text) *********************
// Q # 01:How can I create a paragraph that expands when the user clicks on a Show More?



// Q # 02:Read the text of a paragraph and use it to search for a specific word or phrase.


// Q # 03:
// Q # 04
// Q # 05
// Q # 06




// ************  Chapter 52 (Manipulating Images and Text)  *********************
//Q#01When the user clicks on the sentence, it turns bold.
function bold() {
    var sentence1 = document.getElementById("BOldy")
    sentence1.style.fontWeight = "bold";
}


//Q#2How can I make an image disappear when the user hovers over it and show text instead? When the user hovers off the image, the original image should reappear.
function inside() {
    var imageGhaib = document.getElementById("imageMamla")
    imageGhaib.remove()
    var paraSentence = document.getElementById("sentence")
    var paraSentenceNode = document.createTextNode("THanking For here")
    paraSentence.appendChild(paraSentenceNode)
}
function ouside() {
    var pictureWapis = document.getElementById("sentence")
    var imageDubara = document.getElementById("imageMamla")
    pictureWapis.innerHTML = imageDubara;
}


// Q#03When the user mouses over the heading, its background turns black, but it retains its original light gray color
function color() {
    var idcolor = document.getElementById("backGround")
    idcolor.style.backgroundColor = "black"
}
function nothing() {
    var idcolor1 = document.getElementById("backGround")
    idcolor1.style.backgroundColor = "white"
}

// Q#04	When user hover to a paragraph, Add a underline style to text.






// ***********Chapter 53 (Swapping Images)*************

// Q#01: Swap the images when the user clicks on a button.






