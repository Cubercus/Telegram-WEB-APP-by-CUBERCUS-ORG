let btnAgain = document.querySelector(".again");
let question = document.querySelector(".question");
let inputNumber = document.querySelector(".number-input");
let check = document.querySelector(".check");
let score = document.querySelector(".score");
let message = document.querySelector(".guess-message");
let highscore = document.querySelector(".highscore");
let body = document.querySelector("body");

let scoreItem = 5;
score.innerHTML = scoreItem

let random = Math.floor(Math.random() * 20 + 1);

console.log(random);

check.addEventListener('click', function () {
  console.log(+inputNumber.value);
  if (+inputNumber.value === random) {
    body.style.backgroundColor = "green";
    message.innerHTML = "Ты молодец";
    question.innerHTML = random
    highscore.innerHTML = scoreItem
  }
  else if (+inputNumber.value > random) {
    message.innerHTML = "Введите число поменьше"
    scoreItem -= 1
    score.innerHTML = scoreItem
    if (scoreItem <= 0) {
      body.style.backgroundColor = "red"
      score.innerHTML = 0
    }

  }
  else if (+inputNumber.value < random) {
    message.innerHTML = "Введите число побольше"
    scoreItem -= 1
    score.innerHTML = scoreItem
    if (scoreItem <= 0) {
      body.style.backgroundColor = "red"
      score.innerHTML = 0

    }
  }
})

//restart bovoti
btnAgain.addEventListener('click', function () {
  body.style.backgroundColor = "black";
  question.innerHTML = "???";
  message.innerHTML = "Начни угадывать"
  score.innerHTML = 5;
  inputNumber.value = null;
  random = Math.round(Math.random() * 20 + 1);
})






























// let inputNum = document.querySelector(".number-input");
// let randomNum = document.querySelector(".question");
// let checkBtn = document.querySelector(".check");
// let message = document.querySelector(".guess-message");
// let checkNum = Math.round(Math.random() * 20 + 1);
// let scoreLabel = document.querySelector(".score");
// let highScore = document.querySelector(".highscore");
// let restart = document.querySelector(".again");

// let score = 20;
// scoreLabel.innerHTML = score;

// checkBtn.addEventListener("click", function () {
//   if (+inputNum.value === checkNum) {
//     randomNum.innerHTML = checkNum;
//     document.body.classList.add("body-green");
//     message.innerHTML = "Молодец! Ты угадал число";
//     if (score > highScore.innerHTML) {
//       highScore.innerHTML = score;
//     }
//   } else if (+inputNum.value > checkNum) {
//     message.innerHTML = "Возьми число поменьше";
//     scoreLabel.innerHTML = --score;
//   } else if (+inputNum.value < checkNum) {
//     message.innerHTML = "Возьми число побольше";
//     scoreLabel.innerHTML = --score;
//   }
// });

// restart.addEventListener("click", function () {
//   score = 20;
//   scoreLabel.innerHTML = score;

//   document.body.classList.remove("body-green");
//   message.innerHTML = "Начни угадывать";
//   randomNum.innerHTML = "???";
//   inputNum.value = "";
//   checkNum = Math.round(Math.random() * 20 + 1);
// });
