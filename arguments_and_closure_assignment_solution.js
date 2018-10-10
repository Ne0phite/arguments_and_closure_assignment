// # Exercises 

// 1. Create two functions: `double` and `square`.
console.log("######### Prob 1 ############");
// `double` should take a number and return the number times two. 
const double = (num) => {
	return num*2;
}
// `square` should take a number and return the number squared. 
const square = (num) => {
	return num*num;
}
//  * Create a third function `doubleSquare` that uses both of the functions to 
//return a number that is first doubled and then squared.
 const doubleSquare = (num) => {
 	let doubledNum = double(num);
 	let squaredNum = square(doubledNum);
 	return squaredNum;
 }
 console.log(doubleSquare(3));
// 2. Create a function `classyGreeting` that takes as input the strings `firstName`  and `lastName`,
// and returns a string with a greeting using the two. 
console.log("######### Prob 2 ############");

const classyGreeting = (firstName, lastName) =>{
	return `Hello ${firstName} ${lastName}`
}
console.log(classyGreeting("james", "brown"));
//   * Create a second function `yell`  that takes string as input and returns the 
//string in all capitalized letters.
const yell = (str) => {
	return str.toUpperCase();
}
console.log(yell("afsd"));
//   * Create a third function  `yellGreeting`  that will take the `firstName`  
//and `lastName`  as inputs and yell a greeting using the two.
const yellGreeting = (firstName, lastName) => {
	return yell(`hello ${firstName} ${lastName}`);
}
console.log(yellGreeting("james", "brown"));
// 3. The [concat](https://www.w3schools.com/jsreF/jsref_concat_array.asp) array method 
//is used to merge two (or more) arrays. 
// Write a `removeDupes` function that takes an array as an argument and returns 
//a copy without any duplicate elements. 
// Then, write a function `concatAndRemoveDupes`  that combines two arrays and removes any duplicates.
console.log("######### Prob 3 //BRUTE FORCE WAY// ############");

const removeDuplicates = (arr) => { //BRUTE FORCE METHOD//

	const checkEll = (someArr, someNum)=>{
	  let bol = false;
	  for(let i=0; i<someArr.length; i++){
	    if(someNum === someArr[i]){
	      return true;
	    }else{
	      bol = false;
	    }
	  }
	  return bol;
	}

	let newArr = [];
	for(let i=0; i<arr.length; i++){
		if(checkEll(newArr, arr[i]) === false){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
console.log(removeDuplicates([1,2,"hello",2,3,"hello",4,4]));
//   _Hint:_ Use the array method `includes`, an object, 
//or a Set. Or the spread operator instead of concat.  
console.log("######### Prob 3 //USING THE HINT// ############");

const removeDupes = (arr) => {
	let newArr = [];
	for(let i=0; i<arr.length; i++){
		if(!newArr.includes(arr[i])){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
console.log(removeDupes([1,2,"hello",2,3,"hello",4,4]))
// 4. Given a list of grades, we can get the median grade by sorting 
//the list and taking the middle element, or the average of the two middle elements. 
// Create the functions `sort` and `middleElement`, and then use them to create the 
//functions `median`.
// let grades = [91, 85, 100, 92, 88];
// console.log(median(grades)); // Should log 91
console.log("######### Prob 4 ############");

const sort = (list) => {
	return list.sort((a, b) => {return a-b});
}

const middleElement = (list) => {
	if(list.length%2===0){
		return (list[list.length/2] + list[(list.length/2)-1])/2;
	}else{
		return list[(list.length-1)/2]
	}
}

const median = (list) => {
	let sortedList = sort(list);
	return middleElement(sortedList);
}

console.log(median([91, 85, 100, 92, 88]))

// 5. Write a function called `repeat` that takes in a string and numberOfTimes. 
//The function should log to the screen the string however 
// many times as numberOfTimes. If the user does not enter a numberOfTimes it 
//should default to 2. 
console.log("######### Prob 5 ############");

const repeat = (str, numberOfTimes=2) => {
	let print = "";
	for(let i=1; i<=numberOfTimes; i++){
		print += str +"\n";
	}
	return print;
}
console.log(repeat("hello world", 4))
// 6. Using the spread operator, write a function that can take any number of 
//arguments and return the sum of all of them. 
console.log("######### Prob 6 ############");

const sumFunc = (...args) => {
	let sum = 0;
	for(let i=0; i<args.length; i++){
		sum += args[i];
	}
	return sum;
}
console.log(sumFunc(1,2,4,4,9,"somestr",43));
// 7. Write a function called `adder` takes in one number and returns a 
//function that will add that number with another number. 
// Using `adder` create an `add5` and an `add9` function. Hint: Closures!
console.log("######### Prob 7 ############");

const adder = (num1) => {
	return (num2) => {
		return num1 + num2;
	}
}

const add5 = adder(5);
const add9 = adder(9);
console.log("add5: "+add5(6));
console.log("add9: "+add9(6))








