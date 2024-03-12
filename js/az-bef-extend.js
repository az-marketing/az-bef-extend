((Drupal) => {
  Drupal.behaviors.nestedUl = {
    attach: (context, settings) => {
      const listItems = context.querySelectorAll("li");
      listItems.forEach((li) => {
        if (li.querySelector("ul")) {
          li.classList.add("has-nested-ul");
        }
        const nest = context.querySelectorAll(".has-nested-ul div");
        nest.forEach((lab) => {
          lab.addEventListener("click", function (e) {
            let tog = e.target.parentElement;
            if (tog.classList.contains("open")) {
              tog.classList.remove("open");
            } else {
              tog.classList.add("open");
            }
          });
        });
      });
    },
  };
})(Drupal);
