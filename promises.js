// ================ Promises ====================
// Are a way to manage async without passing zillions of callback
// functions around or nesting to no end...
// i.e...
// connection.query(query1, (results1)=>{
// 	connection.query(query2, (results2)=>{
// 		connection.query(query3, (results3)=>{
// 			connection.query(query4, (results4)=>{
	
// 			});
// 		});
// 	});
// });

// connection.query(query1){
// 	do stuff
// 	call function I got earlier and pass it what I just got
// 	call function I got earlier and pass it this results4
// 	call function I got earlier and pas it ...
// }

// old way to manage
// function successCallback(result){
// 	console.log('Success: '+result)
// }

// function failedCallback(error){
// 	console.log('Failed: '+result)
// }

// function checkName(name,winning,losing){
// 	if(name == 'Rob'){
// 		winning('Name is Rob.')
// 	}else{
// 		losing('Sorry. Not Rob.')
// 	}
// }

// checkName('Rob',successCallback,failedCallback)

// What is a promise?
// ** for support on IE8 or earlier use library such as 'q' or 'bluebird'
// It is just a JS constructor that gives you a few methods
// -all
// -race
// -rejcet
// -resolve
// -then

// let myFirstPromise = new Promise((resolve,reject)=>{
// 	// resolve and reject are callbacks
// 	// we will run resolve when we are done with our async stuff
// 	// we will run reject if it failed
// 	// setTimeout will stand in as an AJAX or sql request
// 	setTimeout(function(){
// 		resolve('Success!')
// 	},250);
// });

// console.log(myFirstPromise);
// myFirstPromise.then((succesMessage)=>{
// 	console.log(succesMessage);
// 	console.log(myFirstPromise);
// });
// console.log(myFirstPromise);

function one(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('4s have passed');
		}, 4000);
	});
};

function two(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('2s have passed');
		}, 2000);
	});
}

var promiseOne = one();
var promiseTwo = two();
// console.log(promiseOne);
// promiseOne.then((successMessage)=>{
// 	console.log(successMessage);
// });
// promiseTwo.then((successMessage)=>{
// 	console.log(successMessage);
// });

var promises = [];
promises.push(promiseOne);
promises.push(promiseTwo);

// All will wait until every promise in the array has resolved
// it will return an array of each argument passed to each resolve
Promise.all(promises).then((data)=>{
	console.log('all done.');
	console.log(data);
});

// Race will wait until the first promise has finished
// it will return the resolve of the first promise to finish
Promise.race(promises).then((data)=>{
	console.log('Someone is done.');
	console.log(data);
});





























