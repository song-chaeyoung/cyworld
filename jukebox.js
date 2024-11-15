// song play/paused
const songs = document.querySelectorAll(".album_table_song");

songs.forEach((song) => {
  const play = song.querySelector(".fa-caret-right");
  const pasue = song.querySelector(".fa-pause");

  play.addEventListener("click", (e) => {
    e.target.parentNode.querySelector("audio").play();
  });
  pasue.addEventListener("click", (e) => {
    e.target.parentNode.querySelector("audio").pause();
  });
});

// checkbox event

const checkAll = document.querySelector("#total");
const checkBoxs = document.querySelectorAll("#check01");

checkAll.addEventListener("change", () => {
  checkBoxs.forEach((box) => {
    if (checkAll.checked) {
      box.checked = true;
    } else {
      box.checked = false;
    }
  });
});

checkBoxs.forEach((box) => {
  box.addEventListener("change", () => {
    if (!box.checked) {
      checkAll.checked = false;
    }
  });
});
