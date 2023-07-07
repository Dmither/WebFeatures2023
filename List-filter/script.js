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
renderList();

async function renderList() {
	const users = await fetchUsers();
	names = users.map(item => item.name);
	addNames(list, names);
}

async function fetchUsers() {
	const result = await fetch(
		"https://jsonplaceholder.typicode.com/users"
	);
	return result.json();
}

function addNames(list, names) {
	for (let item of names) {
		let user = document.createElement("li");
		user.innerText = item;
		list.append(user);
	}
}

input.addEventListener("input", function (event) {
	let value = event.target.value.toLowerCase();
	let lastValue;
	if (value === lastValue) return;
	for (const user of list.children) {
		if (user.innerHTML.toLowerCase().startsWith(value)) {
			user.classList.remove("hidden");
		} else {
			user.classList.add("hidden");
		}
	}
	lastValue = value;
});
