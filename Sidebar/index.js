let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", function () {
	menu.classList.toggle("_active");
	sidebar.classList.toggle("_active");
});

document.body.addEventListener("click", function (event) {
  if(!event.target.closest(".sidebar") && !event.target.closest(".menu")) {
    menu.classList.remove("_active");
    sidebar.classList.remove("_active");
  }
});
