'use strict';
describe('FizzBuzzWhizz', function() {
  describe('#lenth1(student, first, second, third)', function() {
    it('当学生报数，数字为1位，数字是第一个数的倍数时，应该显示Fizz',function() {
      var result = length1(9,3,5,7);
      expect(result).toEqual('Fizz');
    });

    it('当学生报数，数字为1位，数字是第二个数的倍数时，应该显示Buzz',function() {
      var result = length1(5,3,5,7);
      expect(result).toEqual('Buzz');
    });

    it('当学生报数，数字为1位，数字是第一个数的倍数时，应该显示Whizz',function() {
      var result = length1(7,3,5,7);
      expect(result).toEqual('Whizz');
    });

    it('当学生报数，数字为1位，数字不是三个数的倍数时，显示数字本身',function() {
      var result = length1(1,3,5,7);
      expect(result).toEqual(1);
    });
  });

  describe('#lenth2(student, first, second, third)', function() {
    it('当学生报数，数字为2位，数字包含第一个数时，应该显示Fizz',function() {
      var result = length2(35,3,5,7);
      expect(result).toEqual('Fizz');
    });

    it('当学生报数，数字为2位，数字是第一个数的倍数时，应该显示Fizz',function() {
      var result = length2(12,3,5,7);
      expect(result).toEqual('Fizz');
    });

    it('当学生报数，数字为2位，数字不包含第一个数的前提下，数字是第二个数的倍数时，应该显示Buzz',function() {
      var result = length2(20,3,5,7);
      expect(result).toEqual('Buzz');
    });

    it('当学生报数，数字为2位，数字不包含第一个数的前提下，数字只是第三个数的倍数时，应该显示Whizz',function() {
      var result = length2(49,3,5,7);
      expect(result).toEqual('Whizz');
    });

    it('当学生报数，数字为2位，数字不包含第一个数的前提下，数字是第一个和第二个数的倍数时，应该显示FizzBuzz',function() {
      var result = length2(15,3,5,7);
      expect(result).toEqual('FizzBuzz');
    });

    it('当学生报数，数字为2位，数字不包含第一个数的前提下，数字是第一个和第三个数的倍数时，应该显示FizzWhizz',function() {
      var result = length2(21,3,5,7);
      expect(result).toEqual('FizzWhizz');
    });

    it('当学生报数，数字为2位，数字不包含第一个数的前提下，数字是第二个和第三个数的倍数时，应该显示BuzzWhizz',function() {
      var result = length2(70,3,5,7);
      expect(result).toEqual('BuzzWhizz');
    });

    it('当学生报数，数字为2位，数字不是三个数的倍数时，显示数字本身',function() {
      var result = length2(11,3,5,7);
      expect(result).toEqual(11);
    });
  })

})
