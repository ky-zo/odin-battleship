import Ship from './ship.js'

test('Ship 4 length, hit 4 times is sunk', () => {
    const testShip = new Ship(4)
    testShip.hit()
    testShip.hit()
    testShip.hit()
    testShip.hit()
    expect(testShip.isSunk()).toBe(true)
})

test('Ship 4 length, hit 5 times is sunk', () => {
    const testShip = new Ship(4)
    testShip.hit()
    testShip.hit()
    testShip.hit()
    testShip.hit()
    testShip.hit()
    expect(testShip.isSunk()).toBe(true)
})

test('Ship 2 length, hit 1 timee is not sunk', () => {
    const testShip = new Ship(2)
    testShip.hit()
    expect(testShip.isSunk()).toBe(false)
})
