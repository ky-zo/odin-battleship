import Ship from './ship'

export default class Gameboard {
    constructor(size, ships = []) {
        this.board = Array.from({ length: size }, () => Array(size).fill(0))
        this.ships = ships
    }

    place(x, y, length, directionVertical) {
        for (let i = 0; i < length; i++) {
            if (directionVertical) {
                if (x + length > this.board.length || this.board[x + i][y] !== 0) {
                    return false
                }
                // Check for adjacent cells
                if (
                    (y > 0 && this.board[x + i][y - 1] !== 0) ||
                    (y < this.board.length - 1 && this.board[x + i][y + 1] !== 0) ||
                    (i > 0 && this.board[x + i - 1][y] !== 0) ||
                    (i < length - 1 && this.board[x + i + 1][y] !== 0)
                ) {
                    return false
                }
            } else {
                if (y + length > this.board.length || this.board[x][y + i] !== 0) {
                    return false
                }
                // Check for adjacent cells
                if (
                    (x > 0 && this.board[x - 1][y + i] !== 0) ||
                    (x < this.board.length - 1 && this.board[x + 1][y + i] !== 0) ||
                    (i > 0 && this.board[x][y + i - 1] !== 0) ||
                    (i < length - 1 && this.board[x][y + i + 1] !== 0)
                ) {
                    return false
                }
            }
        }
        this.board[x][y] = new Ship(length)
        this.blockAdjacentCells(x, y, length, directionVertical)
        this.ships.push(this.board[x][y])
        for (let i = 1; i < length; i++) {
            if (directionVertical) {
                this.board[x + i][y] = this.board[x][y]
            } else {
                this.board[x][y + i] = this.board[x][y]
            }
        }
        return true
    }

    blockAdjacentCells(x, y, length, directionVertical) {
        const startRow = Math.max(x - 1, 0)
        const startCol = Math.max(y - 1, 0)
        const endRow = directionVertical ? Math.min(x + length, this.board.length - 1) : Math.min(x + 1, this.board.length - 1)
        const endCol = directionVertical ? Math.min(y + 1, this.board.length - 1) : Math.min(y + length, this.board.length - 1)

        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                if (this.board[row][col] === 0) {
                    this.board[row][col] = 'B' // Blocking with -1
                }
            }
        }
    }

    receiveAttack(x, y) {
        if (this.board[x][y].constructor.name === 'Ship') {
            console.log('test')
            this.board[x][y].hit()
            const sunkStatus = this.board[x][y].sunk
            this.board[x][y] = 'X'
            return sunkStatus
        }
        this.board[x][y] = 'M'
    }

    isFinished() {
        return this.ships.every((ship) => ship.sunk === true)
    }
}
