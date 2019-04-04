/*----- constants -----*/ 
// player, mole/ player class, score, timer

class Moles {
    constructor(health){
        this.health = Math.floor(Math.random() * 9) + 1
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
    }
    bonk() {
        console.log(`${this.name} just swung his hammer`)
        // maybe add an animation that shakes the screen?
    }
}

const player = new Player("peter")
player.bonk();


let moleArmy = [];


/*----- app's state (variables) -----*/ 
// mole holes in align in matrix 
/*----- cached element references -----*/

// score
/*----- event listeners -----*/ 
// when the moles are hit
/*----- functions -----*/
// attack/hit, hid (for the moles)
// startGame, countdowm timer, randomhole