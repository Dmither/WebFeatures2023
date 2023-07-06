// function getPostsByUserId(id) {
// 	return new Promise((resolve, reject) => {
// 		let user = {
// 			id: id,
// 			name: "",
// 			posts: [],
// 		};
// 		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
// 			.then(data => data.json())
// 			.then(json => {
// 				user.name = json.name;
// 				return fetch(`https://jsonplaceholder.typicode.com/posts`);
// 			})
// 			.then(data => data.json())
// 			.then(json => {
// 				user.posts = json.filter(item => item.userId == id);
// 				// console.log(user)
// 				resolve(user);
// 			});
// 	});
// }

// getPostsByUserId(2).then(user => console.log(user));

// =================================================================

// function fpromise(res, rej) {
// 	let condition = true;
// 	if (condition) {
// 		res("true value");
// 	} else {
// 		rej("false value");
// 	}
// }

// let promise = new Promise(fpromise);

// promise
// 	.then(value => console.log(value == "true value"))
// 	.catch(value => console.log(value != "false value"));

// =================================================================

// function fetchUser(id) {
// 	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
// 		.then(response => response.json())
// 		.then(user => user);
// }

// async function sayHello() {
// 	const user = await fetchUser(1);
// 	console.log(user)
// 	console.log(`Hello, ${user.name}`);
// 	return "Hello!"
// }

// console.log(sayHello())

let input = document.querySelector(".input");
let list = document.querySelector(".list");

let names = [];
fetch("https://jsonplaceholder.typicode.com/users")
	.then(data => data.json())
	.then(users => {
		names = users.map(item => item.name);
		addNames(list, names);
	});

input.addEventListener("input", function (event) {
	let value = event.target.value;
	console.log(value);
	if (value === "") {
		list.innerHTML = "";
		addNames(list, names);
	} else {
		list.innerHTML = "";
		addNames(
			list,
			names.filter(
				item => item.toLowerCase().indexOf(value.toLowerCase()) == 0
			)
		);
	}
});

function addNames(list, names) {
	for (let item of names) {
		let user = document.createElement("li");
		user.innerText = item;
		list.append(user);
	}
}
