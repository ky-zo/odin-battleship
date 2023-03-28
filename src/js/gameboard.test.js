import Gameboard from './gameboard'

const gameboard1 = new Gameboard(10)

test('Gameboard size 10', () => {
    gameboard1.place(2, 3, 4, true)
    expect(gameboard1.board[9][9]).toBe(0)
})

test('Properly set ship', () => {
    gameboard1.place(2, 3, 4, true)
    expect(gameboard1.board[2][3]).toBe('S')
})

test('Properly set ship', () => {
    gameboard1.place(2, 3, 4, true)
    expect(gameboard1.board[4][3]).toBe('S')
})

test('Properly set ship', () => {
    gameboard1.place(2, 3, 4, true)
    expect(gameboard1.board[5][3]).toBe('S')
})

test('Properly set ship', () => {
    gameboard1.place(4, 7, 2, false)
    expect(gameboard1.board[4][8]).toBe('S')
})

test('Not letting place ship if not possible', () => {
    gameboard1.place(9, 9, 4, true)
    expect(gameboard1.board[9][9]).toBe(0)
})
