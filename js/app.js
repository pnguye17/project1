const $holes = $('.hole');
const $scoreBoard = $('#score');
const $moles = $('.mole');
const $bonkSound = $('audio');


let score = 0;
let lastHole;

$(".game").on("click", (event) => {
    console.log(event.target)
    if ($(event.target).hasClass("mole")) {
        score += 1
        $scoreBoard.text(score)
    }
   
})

function randomTime(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomHole($holes) {
  const index = Math.floor(Math.random() * $holes.length);
  const hole = $holes[index];

  if (hole === lastHole) {
    return randomHole($holes);
  }
  lastHole = hole;
  return hole;
}

function pop() {
  const time = randomTime(300, 1000);
  const hole = randomHole($holes);
    console.log(time,hole)
   hole.addClass("up")

//   setTimeout(() => {
//     hole.removeClass('up');
//     $scoreBoard.removeClass('add');
//     if (!timeUp) peep();
//   }, time);
}


// function start() {
//   score = 0;
//   scoreBoard.textContent = score;
//   timeUp = false;
//   scoreBoard.removeClass('add');
//   startScreen.addClass('hide');
// }
