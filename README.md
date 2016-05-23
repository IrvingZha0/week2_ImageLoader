# week2_ImageLoader

##Basic Promise Usage
The new Promise() constructor should only be used for legacy async tasks, like usage of setTimeout or XMLHttpRequest. A new Promise is created with the new keyword and the promise provides resolve and reject functions to the provided callback:

var p = new Promise(function(resolve, reject) {
	
	// Do an async task async task and then...

	if(/* good condition */) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

p.then(function() { 
	/* do something with the result */
}).catch(function() {
	/* error :( */
})

##then
All promise instances get a then method which allows you to react to the promise.  The first then method callback receives the result given to it by the resolve() call:

new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(result) {
	console.log(result);
});

// From the console:
// 10

##catch
The catch callback is executed when the promise is rejected:

new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { reject('Done!'); }, 3000);
})
.then(function(e) { console.log('done', e); })
.catch(function(e) { console.log('catch: ', e); });

// From the console:
// 'catch: Done!'
What you provide to the reject method is up to you. A frequent pattern is sending an Error to the catch:

reject(Error('Data could not be found'));


##Promise.all
Think about JavaScript loaders:  there are times when you trigger multiple async interactions but only want to respond when all of them are completed -- that's where Promise.all comes in.  The Promise.all method takes an array of promises and fires one callback once they are all resolved:

Promise.all([promise1, promise2]).then(function(results) {
	// Both promises resolved
})
.catch(function(error) {
	// One or more promises was rejected
});
An perfect way of thinking about Promise.all is firing off multiple AJAX (via fetch) requests at one time:

var request1 = fetch('/users.json');
var request2 = fetch('/articles.json');

Promise.all([request1, request2]).then(function(results) {
	// Both promises done!
});
You could combine APIs like fetch and the Battery API since they both return promises:

Promise.all([fetch('/users.json'), navigator.getBattery()]).then(function(results) {
	// Both promises done!
});
Dealing with rejection is, of course, hard. If any promise is rejected the catch fires for the first rejection:

var req1 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('First!'); }, 4000);
});
var req2 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { reject('Second!'); }, 3000);
});
Promise.all([req1, req2]).then(function(results) {
	console.log('Then: ', one);
}).catch(function(err) {
	console.log('Catch: ', err);
});

// From the console:
// Catch: Second!
Promise.all will be super useful as more APIs move toward promises.

##Promise.race
Promise.race is an interesting function -- instead of waiting for all promises to be resolved or rejected, Promise.race triggers as soon as any promise in the array is resolved or rejected:

var req1 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('First!'); }, 8000);
});
var req2 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('Second!'); }, 3000);
});
Promise.race([req1, req2]).then(function(one) {
	console.log('Then: ', one);
}).catch(function(one, two) {
	console.log('Catch: ', one);
});

// From the console:
// Then: Second!
