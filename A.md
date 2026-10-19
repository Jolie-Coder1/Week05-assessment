
 Week 05 Assessment — Part A
 Ikimina Savings Group

 1: Predict the Output

Code:

javascript
let savings = 15000;
let contribution = 5000;

savings += contribution;

console.log(savings);
console.log(savings >= 20000);


Answer:

text
20000
true


Explanation:

The initial savings are 15,000 RWF. Adding 5,000 RWF gives
20,000 RWF. The condition is true because 20,000 is greater
than or equal to 20,000.

 2: Fix the Buggy Code

Buggy code:

javascript
let savings = 10000;

if (savings = 20000) {
    console.log("Target reached");
} else {
    console.log("Target not reached");
}


Corrected code:

javascript
let savings = 10000;

if (savings >= 20000) {
    console.log("Target reached");
} else {
    console.log("Target not reached");
}


Explanation:

The original code uses the assignment operator (=) instead
of a comparison. The corrected code uses >= to check whether
savings have reached or exceeded the target.

Expected output:

text
Target not reached


 3: Short Answers

a) What is a variable in JavaScript?

A variable stores data that can be used in a program.
Examples include let savings = 10000; and
const groupName = "Ikimina";.

b) What is the difference between let and const ?

"let " allows a variable to be reassigned, while "const"
does not allow reassignment after initialization.

c) What is the difference between '=' and '==='?

'=' assigns a value to a variable. '===' compares two
values for equality without converting their data types.

d) Why should a phone number be stored as a string?

A phone number should be stored as a string to preserve
leading zeros and because it is an identifier, not a
quantity used for arithmetic.

e) What is the purpose of an if/else statement?

It allows a program to make decisions by running different
blocks of code depending on whether a condition is true
or false.
