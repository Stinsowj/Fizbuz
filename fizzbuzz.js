exports.count = function(begin, end) {

	var output = "", counter = begin, space;

	for(counter = begin; counter <= end; counter = counter += 1) {
		space = counter > begin? " ": "";
		output = output + " " + exports.buzz(exports.fizz(exports.fizzbuzz(counter)))
			}

	//return 1, 2, 3, 4, 5
	return output; 
};

exports.fizz = function(num) {
	if(0 === num % 3) {
	return "Fizz";}
	return num;
};
exports.buzz = function(num) {
	return 0 === num % 5 ? "Buzz" : num;
};
exports.fizzbuzz = function(num) {
	if(0 === num % 5 && 0 === num % 3) {
	return "FizzBuzz";}
	return num;
};