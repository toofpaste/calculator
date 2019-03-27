var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var mult = function(number1, number2) {
  return number1 * number2;
};

var div = function(number1, number2) {
  return number1 / number2;
};

var bmi = function(num1, num2){
  return (num1)*703 / num2*num2;
};

var farh = function(num1){
  return (num1 * 1.8) + 32;
};

var cook = function(num1){
  return num1*3.7854;
};

$(function(){
  $("#add").submit(function(event){
  var num1= parseInt($("input#add1").val());
  var num2 = parseInt($("input#add2").val());
  var result = add(num1, num2);

  $("#output").text(result).show();
  event.preventDefault();
});

});
