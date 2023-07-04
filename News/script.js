function createPost(img, name, text) {
	let card = document.createElement("div");
	card.className = "card";
	document.querySelector(".articles").append(card);

	let image = document.createElement("div");
	image.className = "image";
	card.append(image);
	
	let user = document.createElement("h2");
	user.className = "title";
	card.append(user)
	
	let article = document.createElement("p");
	article.className = "text";
	card.append(article)

	fetch(`https://jsonplaceholder.typicode.com/photos/${img}`)
		.then(response => response.json())
		.then(json => {
			image.innerHTML = `<img src='${json.url}'>`;
		});

	fetch(`https://jsonplaceholder.typicode.com/users/${name}`)
		.then(response => response.json())
		.then(json => {
			user.innerText = json.name
		});

	fetch(`https://jsonplaceholder.typicode.com/posts/${text}`)
		.then(response => response.json())
		.then(json => {
			article.innerText = json.body
				.split("\n")
				.join(" ");
		});
}

createPost(
	Math.floor(Math.random() * 5000) + 1,
	Math.floor(Math.random() * 10) + 1,
	Math.floor(Math.random() * 100) + 1
);
createPost(
	Math.floor(Math.random() * 5000) + 1,
	Math.floor(Math.random() * 10) + 1,
	Math.floor(Math.random() * 100) + 1
);
createPost(
	Math.floor(Math.random() * 5000) + 1,
	Math.floor(Math.random() * 10) + 1,
	Math.floor(Math.random() * 100) + 1
);
