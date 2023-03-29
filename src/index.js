import './styles.css'
import Game from './js/game'
import './js/dom'

const theGame = new Game('User', 'Computer')

theGame.gameStart()
;(function flipbutton() {
    const orientation = document.querySelector('#orientation')
    const button = document.querySelector('#flip')
    button.addEventListener('click', () => {
        if (orientation.textContent === 'Horizontally') {
            orientation.textContent = 'Vertically'
        } else {
            orientation.textContent = 'Horizontally'
        }
    })
})()
