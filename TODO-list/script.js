const input = document.querySelector(".input-container input");
const button = document.querySelector(".input-container button");
const list = document.querySelector(".todo-list");

button.addEventListener("click", createTask);
input.addEventListener("keydown", function(event) {
  if (event.key == "Enter") {
    createTask()
  }
})

function createTask() {
  if (!input.value) return
  const item = createListElement(input.value);
  input.value = ""
	list.append(item);

	checkListOverflow(list);
}

function createListElement(value) {
	const item = document.createElement("li");
	const text = document.createElement("p");
	const btn = document.createElement("button");
	text.innerText = value;
	btn.innerText = "DELETE";
	item.append(text, btn);

	addDeleteEvent(btn);

	return item;
}

function addDeleteEvent(btn) {
	btn.addEventListener("click", function (event) {
		event.target.closest("li").remove();
		checkListOverflow(list);
	});
}

function checkListOverflow(list) {
	if (list.clientWidth < list.offsetWidth) {
		list.style.marginRight = `${
			list.clientWidth - list.offsetWidth
		}px`;
	} else {
		list.style.marginRight = "0px";
	}
}

