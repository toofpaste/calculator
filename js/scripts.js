var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var subtract = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = subtract(number1, number2);
alert(result);

var mult = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = mult(number1, number2);
alert(result);

var div = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = div(number1, number2);
alert(result);

var bmi = function(num1, num2){
  return (num1)*703 / num2*num2;
};
var num1 = parseInt(prompt("Weight in lbs:"));
var num2 = parseInt(prompt("Height in inches:"));
var result = bmi(num1, num2);
alert(result);

var farh = function(num1){
  return (num1 * 1.8) + 32;
};
var num1 = parseFloat(prompt("What is the temperature in Celcius"));
var result = farh(num1);
alert(result + " Degress F");

var cook = function(num1){
  return num1*3.7854;
};
var num1 = parseFloat(prompt("What is the number of gallons?"));
var result = cook(num1);
alert(result + " liters");
