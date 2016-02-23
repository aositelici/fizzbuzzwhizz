'use strict';

function FizzBuzzWhizz (number, first, second, third) {
  var result = [];
  for(var student = 1; student <= number; student++) {
    var element = getElement (student, first, second, third);
    result.push(element);
  }
  return result;
}

function getElement(student, first, second, third) {
  var number = student.toString().split("");
  var result= [];
  result=  getIncluding(number, first);

  if(result!=="Fizz") {
    if (student%first === 0 || student%second === 0 || student%third === 0){
      return getMultiple (student, first, second, third);
    }else {
      return student;
    }
  }
  else {
    return result;
 }
}

function getMultiple (student, first, second, third) {
  var result = [];
  if (student%first === 0) {
    result.push("Fizz");
  }
  if (student%second === 0) {
    result.push("Buzz");
  }
  if (student%third === 0) {
     result.push("Whizz");
  }
  return result.join('');
}

function getIncluding(number, first) {
  var result;
  number.forEach(function(element){
    if(parseInt(element) ===first) {
     result="Fizz";
    }
  })
  return result;
}

FizzBuzzWhizz (100,3,5,7);
