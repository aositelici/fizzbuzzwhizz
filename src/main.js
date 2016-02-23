'use strict';

function FizzBuzzWhizz (first, second, third) {
  var result = [];
  for(var student = 1; student <= 100; student++) {
    var element = getElement (student, first, second, third);
    result.push(element);
  }
  return result;
}

function getElement(student, first, second, third) {
  var number = student.toString().split("");
  var result= [];

   number.forEach(function(element){
     if(parseInt(element) ===first) {
       result="Fizz";
     }
   })
   if(result!=="Fizz") {
     result=[];
      if (student%first === 0 || student%second === 0 || student%third === 0){
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
     else {
         return student;
     }
   }
   else {
     return result;
   }
}
FizzBuzzWhizz (3,5,7);
