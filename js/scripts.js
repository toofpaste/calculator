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
  return (num1*703) / (num2*num2);
};

var farh = function(num1){
  return (num1 * 1.8) + 32;
};

var cook = function(num1){
  return num1*3.7854;
};

var choice = 0;
$(function(){
  var favoriteColor = $("#color").val();

  $("#plus").click(function(){
    choice = 1;
  });

  $("#sub").click(function(){
    choice = 2;
  });

  $("#mul").click(function(){
    choice = 3;
  });

  $("#dvi").click(function(){
    choice = 4;
  });
  $("#bmi1").click(function(){
    choice = 5;
  });
  $("#load").click(function(){
    choice = 6;
  });
  $("#load2").click(function(){
    choice = 7;
  });
  $("#temp").click(function(){
    choice = 8;
  });
  $("#load3").click(function(){
    choice = 9;
  });
  $("#gal").click(function(){
    choice = 10;
  });
  $("#col").click(function(){
    choice = 11;
  });



  $("#add").submit(function(event){
  var num1= parseInt($("input#add1").val());
  var num2 = parseInt($("input#add2").val());


  if (choice === 1){
  var addition = add(num1, num2);
    $("#output").text(addition).show();
} else if (choice === 2){
  var subtraction = subtract(num1, num2);
  $("#outSub").text(subtraction).show();
}else if (choice === 3){
  var multiply = mult(num1, num2);
  $("#outMul").text(multiply).show();
}else if (choice === 4){
  var division = div(num1, num2);
  $("#outDvi").text(division).show();
}else if (choice === 5){
  var bmis = bmi(num1, num2);
  $("#outBmi").text(bmis).show();
}else if (choice === 6){
  $("#weight").toggle();
  $("#h").toggle();
}else if (choice === 7){
  $("#add2").toggle();
  $("#add3").toggle();
  $("#f").toggle();
}else if (choice === 8){
  var tem = farh(num1, num2);
  $("#outTemp").text(tem).show();
}else if (choice === 9){
  $("#add2").toggle();
  $("#add3").toggle();
  $("#g").toggle();
}else if(choice === 10){
  var gall = cook(num1, num2);
  $("#outGal").text(gall).show();
}else if(choice === 11)



  event.preventDefault();
  });


});
