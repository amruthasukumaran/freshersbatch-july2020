var sum = require('./operations/sum');
var multiplication = require('./operations/multiplication');
var division = require('./operations/division');
var substraction = require('./operations/substraction');
var moment = require('moment');



var firstOperand = +process.argv[2]
var secondOperand = +process.argv[3]

console.log("Today is: " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

sum (firstOperand, secondOperand);
multiplication (firstOperand, secondOperand);
division (firstOperand, secondOperand);
substraction (firstOperand, secondOperand);




