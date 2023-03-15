
function initDrop(dropdown){
  dropdown.children[0].addEventListener("focus", function (event) {
    event.target
      .closest(".drop")
      .classList.add("drop_active");
  });
  dropdown.children[0].addEventListener("blur", function (event) {
    event.target
      .closest(".drop")
      .classList.remove("drop_active");
  });
  let dropdownLinks = dropdown.children[1].children;
  Array.from(dropdownLinks).forEach(item => {
    item.children[0].addEventListener("focus", function(event){
      event.target
        .closest(".drop")
        .classList.add("drop_active");
    });
    item.children[0].addEventListener("blur", function(event){
      event.target
        .closest(".drop")
        .classList.remove("drop_active");
    });
  });
}
