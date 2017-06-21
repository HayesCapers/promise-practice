
// Callbacks
	// A function given to another function to be run later
	// In JS, functions are just objects
	// Therefore, you can pass functions around your code

// EX)
// These are EXACTLY the same!
// 1)
// $('btn').click(function(){ 
// 	console.log('click') 
// });
// // 2)
// var clickFunction = function(){ console.log('click') };
// $('btn').click(clickFunction);

// =========================== Somewhere in jQuery is this... =========================
// var $ = {};
// $.click = function(callBackToRunLater){
// 	// stuff happens
// 	callBackToRunLater();
// }

// Consider the following...
// function x(y){
// 	console.log(y)
// }
// x(2)(3)

// How can you make this work?
// The only way is if x RETURNS a function.
// That function will take a parameter
// Higher order function = a function that gets passed around

// function x(y){
// 	return function(z){
// 		console.log(y+z);
// 	}
// }
// x(2)(3)



// =================================
function print(thingToPrint){
	console.log(thingToPrint);
}

// The print function does not need to be passed around because we have access to it locally
// think BlackJack. Deal was a utility function, we called it when we needed it

// function b(number){
// 	let localNum = number * number;
// 	print(localNum);
// }

// function c(theString){
// 	let localString = theString + ' Is passed';
// 	print(localString);
// }
// b(2)
// c('test')

// Could also make print a prototype of a constructor,
// BUT... what if we didn't have access to the code that needs
// to run our code? I.e., what if the we didnt have accsess to required variables?

// var a = function(theVar){
// 	console.log(theVar);
// }

// var b = function(number,callback){
// 	let localNum = number * number;
// 	callback(localNum);
// }

// b(3,a)


// EXCERCISE
// found in WEEK 10 DAY 3 folder on schoology
// var theArray = [1,3,5,8,9,10];
// var theArrayThatDoesNotHaveAnEightOrATenInItSoItShouldReturnFalse = [1,3,5,9];
// var theArrayThatHasStringsInItThatAreReallyStupidAndIAmSickOftypingTheseThings = ['Jim','Indian','Marsh','Glitch'];
// var TheStringArrayThatDoesNotHaveGlitchInItAndShouldReturnFalseButHopeFullyItReturnsSomethingBetterLikeGaryOrSomethingThatWouldBeCooooool = ['Jim','Indian','Marsh']
// var theFunction = function(num){
// 	return num % 2 === 0;
// }
// var stringsNStuffNBaconNTHingsNHamNBones = function(str){
// 	return str.indexOf('itch') !== -1;
// }


// function findElement(array,callback){
//  	var exists = false;
//  	for(let i = 0; i < array.length; i++){
//  		if(callback(array[i])){
// 			console.log(array[i]);
// 			exists = true;
//  			break;
//  		}
//  	}
//  	if (!exists){
//  		console.log('false')
//  	}
// }

// findElement(theArray,theFunction)
// findElement(theArrayThatDoesNotHaveAnEightOrATenInItSoItShouldReturnFalse,theFunction)
// findElement(theArrayThatHasStringsInItThatAreReallyStupidAndIAmSickOftypingTheseThings,stringsNStuffNBaconNTHingsNHamNBones);
// findElement(TheStringArrayThatDoesNotHaveGlitchInItAndShouldReturnFalseButHopeFullyItReturnsSomethingBetterLikeGaryOrSomethingThatWouldBeCooooool,stringsNStuffNBaconNTHingsNHamNBones)

// =====================================================

var students = ['Rissa','Merilee','Chris','Stephen'];
students.map((student,index)=>{
	console.log(student);
})

// map() is available for all arrays. Array.prototype.map
// same a for loop. it iterates through an array
// context = map(callback(student,index))



















