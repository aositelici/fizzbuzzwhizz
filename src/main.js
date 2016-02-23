'use strict';

function FizzBuzzWhizz (first, second, third) {
  var result = [];
  for(var student = 1; student <= 100; student++) {
    var length = student.toString().length;
    var element = judgeLength (length, student, first, second, third);
    result.push(element);
  }
  return result;
}

function judgeLength (length, student, first, second, third) {

  var result;
  if(length === 1) {
    result = length1(student, first, second, third);
  }
  else if(length ===2) {
    result = length2(student, first, second, third);
  }
  else {
    result = length3(student, first, second, third);
  }
  return result;
}

function length1(student, first, second, third) {
    if(student%first === 0) {
      return "Fizz";
    }
    else if (student%second === 0) {
      return "Buzz";
    }
    else if (student%third === 0) {
      return "Whizz";
    }
    else {
      return student;
    }
}

function length2(student, first, second, third) {
   var result= [];
    if(student%10 === first || parseInt(student/10) === first) {
       return "Fizz";
    }
    else if (student%first === 0 || student%second === 0 || student%third === 0){
      if (student%first === 0) {
        result.push("Fizz");
      }
      if (student%second === 0) {
        result.push("Buzz");
      }
      if (student%third === 0) {
         result.push("Whizz");
      }
    }
    else {
        return student;
    }
    return result.join("");
}

function length3(student, first, second, third) {
   return "Fizz";
}

FizzBuzzWhizz (3,5,7);
