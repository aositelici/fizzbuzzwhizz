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
  })

})
