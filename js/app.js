// global variables

const $holes = document.querySelectorAll(".hole");
const $scoreboard = document.querySelector(".score");
const $moles = document.querySelectorAll(".mole");


let previousHole;
let timeUp = false; //<===== initiating the as false bc game hasnt started
let score = 0;

// eventlistener
$moles.forEach(mole => mole.addEventListener("click", hit)); // <=== adding listeners to each mole div

// functions

// get a random time the $moles would pop milisecs
function randomTime(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
  
}


function randomHole($holes) {
  const i = Math.floor(Math.random() * $holes.length);
  const hole = $holes[i];
  if (hole === previousHole) { //<= if the $holes are the same run the function again
    return randomHole($holes);
  }
  lastHole = hole;
  return hole;
}

// functions to make $moles appear
function pop() {
  const time = randomTime(200, 1000);
  const hole = randomHole($holes);
  hole.classList.add("up"); //<=== to animate the $moles
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) pop(); //<=== if the game is still running invoke pop again
  }, time); //<=== 
}

function hit(e) {
  score++;
  this.parentNode.classList.remove("up"); //<=== change the parent node in a node object
  $scoreboard.textContent = score;
}


function startGame() {
  $scoreboard.textContent = 0;
  timeUp = false;
  score = 0;
  pop();
  setTimeout(() => (timeUp = true), 15000);
}
