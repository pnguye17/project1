// global variables

const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");


let previousHole;
let timeUp = false;
let score = 0;

// eventlistener
moles.forEach(mole => mole.addEventListener("click", hit)); // <=== adding listeners to each mole div

// functions


function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
  
}

function randomHole(holes) {
  const i = Math.floor(Math.random() * holes.length);
  const hole = holes[i];
  if (hole === previousHole) { //<= if the holes are the same run the function again
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

// functions to make moles appear
function pop() {
  const time = randomTime(200, 2000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) pop();
  }, time);
}

function hit(e) {
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
}


function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  pop();
  setTimeout(() => (timeUp = true), 15000);
}
