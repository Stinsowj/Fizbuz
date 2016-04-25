var fb = require('../fizzbuzz');

describe("a program that plays fizzbuzz", function() {

	it("counts from 1 to 100", function() {
		expect(fb.count(10, 15)).toBe(" Buzz 11 Fizz 13 14 FizzBuzz");
	});

    it("it outputs fizz for multiples of 3 or the number otherwise", function() {
      expect(fb.fizz(3)).toBe("Fizz");
      expect(fb.fizz(2)).toBe(2);
    });
    it("it outputs Buzz for multiples of 5 or the number otherwise", function() {
      expect(fb.buzz(5)).toBe("Buzz");
      expect(fb.buzz(2)).toBe(2);
  });
    it("it outputs fizzbuzz for multiples of 3 and 5 or the number otherwise", function() {
      expect(fb.fizzbuzz(15)).toBe("FizzBuzz");
      expect(fb.fizzbuzz(2)).toBe(2);
    });
});
