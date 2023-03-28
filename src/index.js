import './styles.css'
import Game from './js/game'
import './js/dom'

const theGame = new Game('User', 'Computer')

theGame.gameStart()

console.log(theGame)
// theGame.gameLoop()
