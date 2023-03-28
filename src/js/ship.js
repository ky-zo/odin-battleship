export default class Ship {
    constructor(length, hitCount = 0, sunk = false) {
        this.length = length // number
        this.hitCount = hitCount // number
        this.sunk = sunk // boolean
    }

    hit() {
        this.hitCount += 1
        this.sunk = this.hitCount >= this.length
    }

    isSunk() {
        return this.sunk
    }
}
