let form1 = document.forms.form1;
console.log(form1);

let nameInput = document.querySelector(".name input")
console.log(nameInput)

nameInput.addEventListener("invalid", function(event) {
  nameInput.setCustomValidity("Enter your name!");
})