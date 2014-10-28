$(document).on('ready', function() {
  
});

// Question 1: Write a function secondGreatLow that takes a single array of numbers and returns the second lowest and second greatest numbers, respectively, separated by a space. For example: if the array contains [7, 7, 12, 98, 106] the output should be "12 98". The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!

function secondGreatLow(numArray){
	var sortedArray = numArray.sort(function(a, b){
	    if (a < b)
	        return -1;
	    if (a > b)
	        return 1;
	    else
	        return 0;
	});
	var answer = sortedArray[1] + ' ' + sortedArray[sortedArray.length - 2];
	return answer;

}

console.log(secondGreatLow([7, 7, 12, 98, 106]));



//Question 2: Write a function timeConvert that takes a number parameter and returns the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

function timeConvert(num) {
	var div = Math.floor(num / 60);
	var rem = num % 60;
	var answer = div + ':' + rem;
	return answer;
}

console.log(timeConvert(63));



//Bonus: Write a function bracketMatcher that takes a single string parameter and returns true if the brackets are correctly matched and each one is accounted for. Otherwise return false. For example: if str is "(hello (world))", then the output should be true, but if str is "((hello (world))" the the output should be false because the brackets do not correctly match up. "(()())" should return true. Only "(" and ")" will be used as brackets. If str contains no brackets return true.