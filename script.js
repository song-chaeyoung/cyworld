// tab Change Event
const navs = document.querySelectorAll(".navigation_item");
const contents = document.querySelectorAll("#content_frame");

navs.forEach((nav, i) => {
  nav.addEventListener("click", () => {
    contents.forEach((c) => {
      c.classList.remove("active");
    });
    navs.forEach((n) => {
      n.classList.remove("active");
    });
    nav.classList.add("active");
    contents[i].classList.add("active");
  });
});

// Background Change Event
const background = document.querySelector(".background");
const select = document.querySelector("#emotion");

select.addEventListener("change", () => {
  switch (select.value) {
    case "empty":
      background.style.background = "";
      break;
    case "happy":
      background.style.background = "pink";
      break;
    case "sad":
      background.style.background = "dodgerblue";
      break;
    case "angry":
      background.style.background = "orange";
      break;
    case "annoy":
      background.style.background = "crimson";
      break;
  }
});
