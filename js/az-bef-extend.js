const listItems = document.querySelectorAll("li");
listItems.forEach((li) => {
  if (li.querySelector("ul")) {
    li.classList.add("has-nested-ul");
    li.addEventListener("click", function (e) {
      const tog = e.target;
      tog.classList.toggle("open");
    });
  }
});