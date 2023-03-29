import Player from './player'

const shipsData = [
    { length: 5, count: 1 },
    { length: 4, count: 1 },
    { length: 3, count: 1 },
    { length: 2, count: 1 },
    { length: 1, count: 1 },
]

export default class Game {
    constructor(player1, player2) {
        this.player1 = new Player(player1)
        this.player2 = new Player(player2, true)
        this.currentPlayer = this.player1
        this.opponent = this.player2
    }

    gameStart() {
        this.shipsSetup() // AI ship setup
        const turn = document.querySelector('#turn-display')
        turn.textContent = `Turn: ${this.currentPlayer.name}`
        const gameGrid1 = document.querySelector('.player1>.grid')
        const gameGrid2 = document.querySelector('.player2>.grid')
        gameGrid1.textContent = ''
        gameGrid2.textContent = ''

        for (let i = 0; i < this.player1.gameboard.board.length; i++) {
            for (let j = 0; j < this.player1.gameboard.board[i].length; j++) {
                const cell = document.createElement('div')
                cell.className = `cell r${i} c${j}`
                cell.addEventListener(
                    'click',
                    () => {
                        this.placeShip(i, j)
                    },
                    { once: true }
                )

                gameGrid1.appendChild(cell)

                const cell2 = document.createElement('div')
                cell2.className = `cell r${i} c${j}`
                cell2.addEventListener(
                    'click',
                    () => {
                        this.gameLoop(i, j)
                    },
                    { once: true }
                )
                cell2.addEventListener('mouseover', () => {
                    cell2.classList.add('available')
                })
                cell2.addEventListener('mouseleave', () => {
                    cell2.classList.remove('available')
                })
                gameGrid2.appendChild(cell2)
            }
        }
        this.updateShips()
        this.boardsUpdate()
    }

    boardsUpdate() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.querySelector(`#player1 > .cell.r${i}.c${j}`)
                cell.textContent = this.translateGridValue(this.player1.gameboard.board[i][j])
                if (cell.textContent === '🔥') {
                    cell.classList.add('hit')
                } else if (cell.textContent === '💧') {
                    cell.classList.add('miss')
                }
            }
        }

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.querySelector(`#player2 > .cell.r${i}.c${j}`)
                cell.textContent = this.translateGridValue(this.player2.gameboard.board[i][j])
                switch (cell.textContent) {
                    case '🔥':
                        cell.classList.add('hit')
                        break
                    case '💧':
                        cell.classList.add('miss')
                        break
                    case '🚢':
                        cell.textContent = ''
                        break
                    case '💦':
                        cell.textContent = ''
                        break
                    default:
                        break
                }
            }
        }
    }

    isGameOver() {
        const player1Lost = this.player1.gameboard.isFinished()
        const player2Lost = this.player2.gameboard.isFinished()

        if (player1Lost || player2Lost) {
            const winner = player1Lost ? this.player2.name : this.player1.name
            const info = document.querySelector('#info')
            info.textContent = `🙌 ${winner} won the game!🙌`
            return true
        }
        return false
    }

    gameLoop(i, j) {
        // this.currentPlayer.nextMove(i, j) ????
        if (this.player1.gameboard.ships.length < 5) return
        if (this.isGameOver()) return
        this.switchPlayers()
        this.currentPlayer.gameboard.receiveAttack(i, j)
        this.updateShips()
        this.boardsUpdate()
        setTimeout(() => {
            if (this.currentPlayer.ai) {
                const [aiMoveI, aiMoveJ] = this.generateAIMove() // Implement this function to generate AI moves
                this.gameLoop(aiMoveI, aiMoveJ)
            }
        }, 250)
    }

    switchPlayers() {
        ;[this.currentPlayer, this.opponent] = [this.opponent, this.currentPlayer]
        const turn = document.querySelector('#turn-display')
        turn.textContent = `Turn: ${this.currentPlayer.name}`
    }

    placeShip(i, j) {
        if (this.player1.gameboard.ships.length === 5) return

        const firstNotPlacedIndex = shipsData.findIndex((ship) => !ship.placed)
        let direction = ''

        const orientation = document.querySelector('#orientation')
        if (orientation.textContent === 'Horizontally') {
            direction = false
        } else {
            direction = true
        }

        shipsData[firstNotPlacedIndex].placed = this.player1.gameboard.place(i, j, shipsData[firstNotPlacedIndex].length, direction)

        this.updateShips()
        this.boardsUpdate()
        if (this.player1.gameboard.ships.length === 5) {
            const info = document.querySelector('#info')
            info.textContent = '🚀 Play the game! 🚀'
            const placing = document.querySelector('.placing')
            placing.textContent = ''
        }
    }

    shipsSetup() {
        this.placeRandomShips(this.player2.gameboard, shipsData)
    }

    generateAIMove() {
        let moveI
        let moveJ
        do {
            moveI = Math.floor(Math.random() * this.opponent.gameboard.board.length)
            moveJ = Math.floor(Math.random() * this.opponent.gameboard.board.length)
        } while (this.opponent.gameboard.board[moveI][moveJ] === 'M' || this.opponent.gameboard.board[moveI][moveJ] === 'X')

        return [moveI, moveJ]
    }

    updateShips() {
        const shipList1 = document.querySelector('.player1>.ships')
        const shipList2 = document.querySelector('.player2>.ships')

        shipList1.textContent = ''
        shipList2.textContent = ''

        this.player1.gameboard.ships.forEach((ship, index) => {
            const listItem = document.createElement('li')
            listItem.textContent = `🚢 ${index + 1}: Size: ${ship.length}, Hit: ${ship.hitCount}, Dead: ${ship.sunk}`
            shipList1.appendChild(listItem)
        })
        this.player2.gameboard.ships.forEach((ship, index) => {
            const listItem = document.createElement('li')
            listItem.textContent = `🚢 ${index + 1}: Size: ${ship.length}, Hit: ${ship.hitCount}, Dead: ${ship.sunk}`
            shipList2.appendChild(listItem)
        })
    }

    translateGridValue(value) {
        if (value.constructor.name === 'Ship') {
            return '🚢'
        }
        switch (value) {
            case 0:
                return ''
            case 'P':
                return '💧'
            case 'M':
                return '💧'
            case 'X':
                return '🔥'
            case 'B':
                return '💦'
            default:
                return 'ERR'
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    placeRandomShips(gameboard, shipsData) {
        for (const shipData of shipsData) {
            let placed = false

            while (!placed) {
                const x = this.getRandomInt(0, gameboard.board.length - 1)
                const y = this.getRandomInt(0, gameboard.board.length - 1)
                const directionVertical = Math.random() < 0.5

                const shipLength = shipData.length
                const shipCount = shipData.count

                for (let i = 0; i < shipCount; i++) {
                    if (gameboard.place(x, y, shipLength, directionVertical)) {
                        placed = true
                    }
                }
            }
        }
    }
}