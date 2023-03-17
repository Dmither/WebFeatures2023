let modal = document.querySelector(".modal");
let open = document.querySelector(".show-modal");
let close = document.querySelector(".hide-modal");

open.addEventListener("click", function(){
  modal.classList.add("modal_opened");
})

close.addEventListener("click", function(){
  modal.classList.remove("modal_opened");
})

window.addEventListener("click", function(event){
  if (event.target.classList.contains("modal")){
    modal.classList.remove("modal_opened");
  }
})