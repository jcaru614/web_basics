function setImage1() {
  var randomNumber1 = Math.random();
  randomNumber1 = randomNumber1 * 6;
  randomNumber1 = Math.floor(randomNumber1) + 1;
  if (randomNumber1 === 1) {
    document.querySelector(".dice img.img1").src = "images/dice1.png";
  } else if (randomNumber1 === 2) {
    document.querySelector(".dice img.img1").src = "images/dice2.png";
  } else if (randomNumber1 === 3) {
    document.querySelector(".dice img.img1").src = "images/dice3.png";
  } else if (randomNumber1 === 4) {
    document.querySelector(".dice img.img1").src = "images/dice4.png";
  } else if (randomNumber1 === 5) {
    document.querySelector(".dice img.img1").src = "images/dice5.png";
  } else if (randomNumber1 === 6) {
    document.querySelector(".dice img.img1").src = "images/dice6.png";
  }
  return(randomNumber1);
}


function setImage2() {
  var randomNumber2 = Math.random();
  randomNumber2 = randomNumber2 * 6;
  randomNumber2 = Math.floor(randomNumber2) + 1;
  if (randomNumber2 === 1) {
    document.querySelector(".dice img.img2").src = "images/dice1.png";
  } else if (randomNumber2 === 2) {
    document.querySelector(".dice img.img2").src = "images/dice2.png";
  } else if (randomNumber2 === 3) {
    document.querySelector(".dice img.img2").src = "images/dice3.png";
  } else if (randomNumber2 === 4) {
    document.querySelector(".dice img.img2").src = "images/dice4.png";
  } else if (randomNumber2 === 5) {
    document.querySelector(".dice img.img2").src = "images/dice5.png";
  } else if (randomNumber2 === 6) {
    document.querySelector(".dice img.img2").src = "images/dice6.png";
  }
  return(randomNumber2);
}

function rollDices() {
  setImage1();
  setImage2();
  if (setImage1() > setImage2() ) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
  } else if (setImage1() < setImage2() ) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
  } else if (setImage1() === setImage2() ) {
    document.querySelector("h1").innerText = "Draw!";
  } else {
  document.querySelector("h1").innerText = "";
}
}
