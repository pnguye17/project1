/*----- constants -----*/ 
// player, mole/ player class, score, timer

class Moles {
    constructor(health){
        this.health = Math.floor(Math.random() * 9) + 1
        this.speed = Math.floor(Math.random() * 9) + 1
    }
    hide() {
        console.log("the mole is hidden")
    }
    // bite() {
    //     console.log("the hammer missed and the mole just bite you")
    // }
}

class Player {
    constructor(name) {
        this.name = name
        this.score = 0
        this.hitMiss = 0
        this.health = 10
    }
    bonk() {
        console.log(`${this.name} just swung his hammer`)
        Moles.health -= 1
        this.score += 1
        // maybe add an animation that shakes the screen?
    }
}

const player = new Player("peter")
player.bonk();


let moleArmy = [];

const moleMaking = (num) => {
    for (let i = 0; i < num; i++) {
        const moleBabbies = new Moles
        moleArmy.push(moleBabbies)
    }
}



const creatingHoles = (num) => {
    for (let k = 0; k < num; k++) {
        const $molehole = $('<img id="mole">')
        $molehole.attr("src", "photos_project1/maxresdefault.jpg")
        $molehole.attr("width", "200")
        $(".ground").append($molehole)
    }
}

moleMaking(3)
creatingHoles(3)






/*----- app's state (variables) -----*/ 
// mole holes in align in matrix 
/*----- cached element references -----*/

// score
/*----- event listeners -----*/ 
const $moles = $(".container");

$moles.on("click", () => {
    player.bonk
})

console.log(player.score)
// when the moles are hit
/*----- functions -----*/
// attack/hit, hid (for the moles)
// startGame, countdowm timer, randomhole