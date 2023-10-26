let form1 = document.forms.form1;
console.log(form1);

form1.addEventListener("submit", function(event) {
  event.preventDefault()
  console.log(new FormData(event.target))
})
let inputSet = document.querySelectorAll("input")
inputSet.forEach(input => {
  let message = input.parentElement.querySelector(".form-message")
  console.log(message)
  if (message) {
    input.addEventListener("blur", function(event) {
      let valid = event.target.validity.valid;
      let validationMessage = event.target.validationMessage
      if (!valid && validationMessage) {
        message.textContent = validationMessage
      } else {
        message.textContent = "";
      }
    })
  }
});

const reveralPassword = document.querySelector(".reveral-password");
const passwordField = document.querySelector("input#password")

if (reveralPassword && passwordField) {
  reveralPassword.addEventListener("click", (event) => {
    let inputType = passwordField.getAttribute("type")
    if (inputType === "password") {
      passwordField.setAttribute("type", "text")
    } else {
      passwordField.setAttribute("type", "password")
    }
  })
}