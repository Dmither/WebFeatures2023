const promise = new Promise((resolve, reject) => {
	const isUserLoggedIn = true;
	if (isUserLoggedIn) {
		resolve("User is logged in");
	} else {
		reject("Sorry, you are not logged in");
	}
});

promise
	.then(data => console.log(data))
	.catch(error => console.log(error));
