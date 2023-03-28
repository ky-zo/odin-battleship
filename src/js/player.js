import Gameboard from './gameboard'

export default class Player {
    constructor(name, ai = false) {
        this.name = name
        this.gameboard = new Gameboard(10)
        this.ai = ai
    }

    // updateGame() {
    //     let gameGrid = ''
    //     if (this.ai === true) {
    //         gameGrid = document.getElementById('game-grid-ai')
    //     } else {
    //         gameGrid = document.getElementById('game-grid')
    //     }
    //     gameGrid.textContent = ''

    //     for (let i = 0; i < this.gameboard.board.length; i++) {
    //         for (let j = 0; j < this.gameboard.board[i].length; j++) {
    //             const cell = document.createElement('div')
    //             cell.className = 'cell'
    //             cell.textContent = this.updateCell(i, j)
    //             if (this.ai === true && cell.textContent === '') {
    // cell.addEventListener('click', () => {
    //     this.gameLoop(i, j)
    // })
    // cell.addEventListener('mouseover', () => {
    //     cell.classList.add('available')
    // })
    // cell.addEventListener('mouseleave', () => {
    //     cell.classList.remove('available')
    // })
    //             }
    //             gameGrid.appendChild(cell)
    //         }
    //     }
    //     this.updateShips()
    // }

    // updateCell(i, j) {
    //     if (this.gameboard.board[i][j].constructor.name === 'Ship') {
    //         if (this.ai !== true) return '🚢'
    //     } else {
    //         switch (this.gameboard.board[i][j]) {
    //             case 0:
    //                 return ''
    //             case 'P':
    //                 return '💧'
    //             case 'M':
    //                 return '💧'
    //             case 'X':
    //                 return '🔥'
    //             default:
    //                 return 'ERR'
    //         }
    //     }
    // }

    // nextMove(i, j) {
    //     this.gameboard.receiveAttack(i, j)
    //     this.updateGame()
    // }
}
