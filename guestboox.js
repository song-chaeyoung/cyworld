const form = document.querySelector("form");
const userInput = form.querySelector("input[type='text'");

let guests = [];

const save = () => {
  localStorage.setItem(`guestbook`, JSON.stringify(guests));
};

const textDelete = function (e) {
  const target = e.target.parentElement;
  guests = guests.filter((guest) => guest.id != target.id);
  save();
  target.remove();
};

const createText = (guest) => {
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const div = document.createElement("div");
  const button = document.createElement("button");
  div.className += "guesttext";
  div.id = guest.id;
  p1.innerText = guest.text;
  p2.innerText = guest.date;
  button.innerText = "삭제";

  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(button);
  document.querySelector(".guestdata").appendChild(div);

  button.addEventListener("click", textDelete);
};

const handler = (e) => {
  e.preventDefault();
  if (userInput.value !== "") {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const date = today.getDate().toString().padStart(2, "0");

    const guest = {
      id: Date.now(),
      text: userInput.value,
      date: `${year}.${month}.${date}`,
    };

    guests.push(guest);
    createText(guest);
    save();
    userInput.value = "";
  } else {
    alert("일촌평을 입력해주세요!");
  }
};

const init = () => {
  const userTexts = JSON.parse(localStorage.getItem(`guestbook`));
  if (userTexts) {
    userTexts.forEach((text) => {
      createText(text);
    });
    guests = userTexts;
  }
};

init();
form.addEventListener("submit", handler);
