const wordForm = document.querySelector("form");

const wordGame = (e) => {
  e.preventDefault();
  let startWord = document.querySelector(".changeword").innerText;
  let myword = document.querySelector("input[type='text']").value;
  let lastWord = startWord[startWord.length - 1];
  let firstword = myword[0];

  if (lastWord === firstword) {
    document.querySelector(".result").innerText = `정답입니다!`;
    document.querySelector(".changeword").innerText = myword;
    document.querySelector("input[type='text']").value = "";
  } else {
    document.querySelector(".result").innerText = `틀렸습니다!`;
  }
};

wordForm.addEventListener("submit", wordGame);

const lottoBtn = document.querySelector(".content_two button");
const lottoResult = document.querySelector(".two_result");

const lottoStart = () => {
  const digitiCount = 6;
  const maxNum = 44;

  let myNum = new Set();

  while (myNum.size < digitiCount) {
    myNum.add(Math.floor(Math.random() * maxNum) + 1);
  }

  // console.log([...myNum]);
  lottoResult.textContent = `${[...myNum]}`;
};

lottoBtn.addEventListener("click", lottoStart);
