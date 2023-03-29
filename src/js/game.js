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
        this.lastAIMoveHit = false
        this.AImovesQueue = []
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
                cell.addEventListener('mouseover', () => {
                    if (this.getNextShipsIndex() >= 0) {
                        const shipLength = shipsData[this.getNextShipsIndex()].length
                        const shipDirection = this.getShipsDirection()
                        if (this.player1.gameboard.canShipBePlaced(i, j, shipLength, shipDirection)) {
                            cell.addEventListener(
                                'click',
                                () => {
                                    this.placeShip(i, j)
                                },
                                { once: true }
                            )
                            const shipPlaceholder = []
                            if (this.getShipsDirection()) {
                                for (let k = 0; k < shipLength; k++) {
                                    shipPlaceholder.push(document.querySelector(`.cell.r${i + k}.c${j}`))
                                    shipPlaceholder.forEach((element) => {
                                        element.classList.add('available')
                                    })
                                    cell.addEventListener('mouseleave', () => {
                                        shipPlaceholder.forEach((element) => {
                                            element.classList.remove('available')
                                        })
                                    })
                                }
                            } else {
                                for (let k = 0; k < shipLength; k++) {
                                    shipPlaceholder.push(document.querySelector(`.cell.r${i}.c${j + k}`))
                                    shipPlaceholder.forEach((element) => {
                                        element.classList.add('available')
                                    })
                                    cell.addEventListener('mouseleave', () => {
                                        shipPlaceholder.forEach((element) => {
                                            element.classList.remove('available')
                                        })
                                    })
                                }
                            }
                        }
                    }
                })

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
        if (this.player1.gameboard.ships.length < 5) return
        if (this.isGameOver()) return

        console.log(`Current player: ${this.currentPlayer.name} played ${i} ${j}`)

        const roundResult = this.opponent.gameboard.receiveAttack(i, j)

        if (!roundResult) {
            this.switchPlayers()
            this.lastAIMoveHit = false
        } else if (this.opponent.name === 'User') {
            this.lastAIMoveHit = true
            this.AImovesQueue = this.createAIsmartMove(i, j)
            console.log(this.AImovesQueue)
        }

        this.updateShips()
        this.boardsUpdate()

        if (this.currentPlayer.ai) {
            const cellsToDisable = document.querySelectorAll('#player2 > .cell')
            cellsToDisable.forEach((cell) => cell.classList.add('disable'))
            setTimeout(() => {
                const [aiMoveI, aiMoveJ] = this.generateAIMove()
                this.gameLoop(aiMoveI, aiMoveJ)

                cellsToDisable.forEach((cell) => cell.classList.remove('disable'))
            }, 100)
        }
    }

    createAIsmartMove(i, j) {
        const directions = [
            [-1, 0], // Up
            [1, 0], // Down
            [0, -1], // Left
            [0, 1], // Right
        ]

        const possibleDirections = directions.filter(([di, dj]) => {
            const prevX = i - di
            const prevY = j - dj
            return prevX >= 0 && prevX < 10 && prevY >= 0 && prevY < 10 && this.opponent.gameboard.board[prevX][prevY] === 'X'
        })

        let moves
        if (possibleDirections.length === 0) {
            // No direction found, use all directions
            moves = directions.map(([di, dj]) => [i + di, j + dj])
        } else {
            // One direction found, use only that direction and its opposite
            const [di, dj] = possibleDirections[0]
            moves = [
                [i + di, j + dj],
                [i - di, j - dj],
            ]

            // Check if we need to explore the other direction
            const newX = i + di
            const newY = j + dj
            if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10 && this.opponent.gameboard.board[newX][newY] !== 'X') {
                moves.push([i + 2 * di, j + 2 * dj])
            }

            // Add the other two directions if the AI has only hit one cell in the ship
            const remainingDirections = directions.filter(([dirI, dirJ]) => dirI !== di && dirJ !== dj)
            remainingDirections.forEach(([dirI, dirJ]) => {
                const x = i + dirI
                const y = j + dirJ
                if (
                    x >= 0 &&
                    x < 10 &&
                    y >= 0 &&
                    y < 10 &&
                    this.opponent.gameboard.board[x][y] !== 'M' &&
                    this.opponent.gameboard.board[x][y] !== 'X'
                ) {
                    moves.push([x, y])
                }
            })
        }

        const validMoves = moves.filter(([x, y]) => x >= 0 && x < 10 && y >= 0 && y < 10)
        const unexploredMoves = validMoves.filter(
            ([x, y]) => this.opponent.gameboard.board[x][y] !== 'M' && this.opponent.gameboard.board[x][y] !== 'X'
        )

        return unexploredMoves
    }

    generateAIMove() {
        console.log(this.AImovesQueue.length)
        if (this.AImovesQueue.length > 0) {
            const nextMove = this.AImovesQueue.shift()
            return nextMove
        }
        let moveI
        let moveJ
        do {
            moveI = Math.floor(Math.random() * this.opponent.gameboard.board.length)
            moveJ = Math.floor(Math.random() * this.opponent.gameboard.board.length)
        } while (this.opponent.gameboard.board[moveI][moveJ] === 'M' || this.opponent.gameboard.board[moveI][moveJ] === 'X')

        return [moveI, moveJ]
    }

    switchPlayers() {
        ;[this.currentPlayer, this.opponent] = [this.opponent, this.currentPlayer]
        const turn = document.querySelector('#turn-display')
        turn.textContent = `Turn: ${this.currentPlayer.name}`
    }

    getShipsDirection() {
        const orientation = document.querySelector('#orientation')
        if (orientation.textContent === 'Horizontally') {
            return false
        }
        return true
    }

    getNextShipsIndex() {
        return shipsData.findIndex((ship) => !ship.placed)
    }

    placeShip(i, j) {
        if (this.player1.gameboard.ships.length === 5) return

        const firstNotPlacedIndex = this.getNextShipsIndex()

        shipsData[firstNotPlacedIndex].placed = this.player1.gameboard.place(
            i,
            j,
            shipsData[firstNotPlacedIndex].length,
            this.getShipsDirection()
        )

        this.updateShips()
        this.boardsUpdate()
        if (this.player1.gameboard.ships.length === 5) {
            const info = document.querySelector('#info')
            info.textContent = '🚀 Play the game! 🚀'
            const placing = document.querySelector('.placing')
            placing.textContent = ''
            const player1board = document.querySelector('#player1')
            player1board.classList.remove('active-board')
            const player2board = document.querySelector('#player2')
            player2board.classList.add('active-board')
        }
    }

    highlightAvailableCells(i, j, direction, length) {
        for (let k = 0; k < length; k++) {
            let x = i
            let y = j
            if (direction) {
                x += k
            } else {
                y += k
            }
            if (x < this.player1.gameboard.board.length && y < this.player1.gameboard.board[i].length) {
                const cell = document.querySelector(`.cell.r${x}.c${y}`)
                cell.classList.add('available')
            }
        }
    }

    removeHighlight(i, j, direction, length) {
        for (let k = 0; k < length; k++) {
            let x = i
            let y = j
            if (direction) {
                x += k
            } else {
                y += k
            }
            if (x < this.player1.gameboard.board.length && y < this.player1.gameboard.board[i].length) {
                const cell = document.querySelector(`.cell.r${x}.c${y}`)
                cell.classList.remove('available')
            }
        }
    }

    shipsSetup() {
        this.placeRandomShips(this.player2.gameboard, shipsData)
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
