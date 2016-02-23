'use strict';
describe('FizzBuzzWhizz', function() {
  describe('#getElement(student, first, second, third)', function() {
    it('当学生报数，数字包含第一个数时，应该显示Fizz',function() {
      var result = getElement(35,3,5,7);
      expect(result).toEqual('Fizz');
    });
    it('当学生报数，数字不包含第一个数的前提下，数字是第一个数的倍数时，应该显示Fizz',function() {
      var result = getElement(9,3,5,7);
      expect(result).toEqual('Fizz');
    });

    it('当学生报数，数字不包含第一个数的前提下，数字是第二个数的倍数时，应该显示Buzz',function() {
      var result = getElement(25,3,5,7);
      expect(result).toEqual('Buzz');
    });

    it('当学生报数，数字不包含第一个数的前提下，数字是第三个数的倍数时，应该显示Whizz',function() {
      var result = getElement(28,3,5,7);
      expect(result).toEqual('Whizz');
    });

    it('当学生报数，数字不包含第一个数的前提下，数字是第一个和第二个数的倍数时，应该显示FizzBuzz',function() {
      var result = getElement(15,3,5,7);
      expect(result).toEqual('FizzBuzz');
    });

    it('当学生报数，数字不包含第一个数的前提下，数字是第一个和第三个数的倍数时，应该显示FizzWhizz',function() {
      var result = getElement(21,3,5,7);
      expect(result).toEqual('FizzWhizz');
    });

    it('当学生报数,数字不包含第一个数的前提下，数字是第二个和第三个数的倍数时，应该显示BuzzWhizz',function() {
      var result = getElement(70,3,5,7);
      expect(result).toEqual('BuzzWhizz');
    });

    it('当学生报数,数字不包含第一个数的前提下，数字是第一个，第二个和第三个数的倍数时，应该显示FizzBuzzWhizz',function() {
      var result = getElement(105,3,5,7);
      expect(result).toEqual('FizzBuzzWhizz');
    });

     it('当学生报数，数字不是三个数的倍数时，也不包含第一个数字，显示数字本身',function() {
      var result = getElement(11,3,5,7);
      expect(result).toEqual(11);
    });

  });
})
