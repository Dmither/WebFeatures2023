
export function initDrop(dropdown){
  dropdown.children[0].addEventListener("focus", function (event) {
    event.target
      .closest(".dropdown")
      .classList.add("dropdown_active");
  });
  dropdown.children[0].addEventListener("blur", function (event) {
    event.target
      .closest(".dropdown")
      .classList.remove("dropdown_active");
  });
  let dropdownLinks = dropdown.children[1].children;
  Array.from(dropdownLinks).forEach(item => {
    item.children[0].addEventListener("focus", function(event){
      event.target
        .closest(".dropdown")
        .classList.add("dropdown_active");
    });
    item.children[0].addEventListener("blur", function(event){
      event.target
        .closest(".dropdown")
        .classList.remove("dropdown_active");
    });
  });
}
