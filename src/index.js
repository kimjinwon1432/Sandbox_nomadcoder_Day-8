const inputNumber = document.querySelector(".inputdiv input");
//inputNuber is got a number by user

let guessNumber = document.querySelector("#guessNumber");
//guessNuber is guessed by user
const playBtn = document.querySelector("#playBtn");
console.dir(inputNumber);

function enterKey(e) {
  if (e.key === "Enter") e.preventDefault();
}

function clickPlay(event) {
  event.preventDefault();
  console.log(event);
  let getNumber = inputNumber.value;
  console.log(getNumber + 1);
  checkNumber(getNumber);
}

function checkNumber(getNumber) {
  let getGuess = Number(guessNumber.value); //getGuess: guessNuber.value
  if (getNumber < getGuess || getGuess < 0) {
    alert("input corret number");
    guessNumber.value = "";
  } else {
    paintResult(Number(getNumber), getGuess);
  }
}

function paintResult(getNumber, getGuess) {
  let number = Math.floor(Math.random() * (Number(getNumber) + 1));
  console.log("number", typeof number);
  let checkLabel = document.querySelector(".result label");
  let resultH3 = document.querySelector(".result h3");
  console.log("number: ", number, "/////getGuess: ", getGuess);

  checkLabel.innerText = `You chose: ${getGuess}, the machine chose: ${number}`;

  if (number === getGuess) {
    resultH3.innerText = "You Win👀👍";
    console.log("you win");
  } else {
    resultH3.innerText = "You Lost...😅";
    console.log("you lost");
  }
}

playBtn.addEventListener("click", clickPlay);
inputNumber.addEventListener("keypress", enterKey);
guessNumber.addEventListener("keypress", enterKey);
