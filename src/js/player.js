import Gameboard from './gameboard'

export default class Player {
    constructor(name, ai = false) {
        this.name = name
        this.gameboard = new Gameboard(10)
        this.ai = ai
    }
}
