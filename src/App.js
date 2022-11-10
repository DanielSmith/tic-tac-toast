import { useState, useEffect } from 'react'
import MainGrid from './MainGrid'
import './assets/main.css'

let grid = []
function App() {
  const [size, setSize] = useState(3)
  const [displayValues, setDisplayValues] = useState(null)
  const [currentIndicator, setCurrentIndicator] = useState('X')
  const [status, setStatus] = useState('Tic, Tac, Toast.')
  const [activeGame, setActiveGame] = useState(true)

  useEffect(() => {
    resetGrid(size)

    return () => {
      resetGrid(0)
    }
  }, [size])

  const resetGrid = (size) => {
    grid = [] // clear out existing grid

    for (let i = 0; i < size; i++) {
      const filledArray = [...new Array(size)].map(() => ' ')
      grid.push(filledArray)
    }
    setCurrentIndicator('X')
    setStatus('Tic, Tac, Toast.')
    setActiveGame(true)
  }

  const handleSizeClick = (size) => {
    resetGrid(size)
    setDisplayValues(Object.assign({}, grid))
    setSize(size)
  }

  const foundWinner = (numHits) => {
    if (numHits === size) {
      setStatus(
        `${currentIndicator} is the winner - pick any size for new game`
      )
      setActiveGame(false)
      return true
    }

    return false
  }

  const checkForWinner = () => {
    let numHits = 0

    // check rows
    for (let row = 0; row < size; row++) {
      numHits = 0
      for (let col = 0; col < size; col++) {
        if (grid[row][col] === currentIndicator) {
          numHits++
        }
      }

      if (foundWinner(numHits)) return true
    }

    // check cols
    for (let col = 0; col < size; col++) {
      numHits = 0
      for (let row = 0; row < size; row++) {
        if (grid[row][col] === currentIndicator) {
          numHits++
        }
      }

      if (foundWinner(numHits)) return true
    }

    // check diagonals
    // NW to SE
    numHits = 0
    for (let diag = 0; diag < size; diag++) {
      if (grid[diag][diag] === currentIndicator) {
        numHits++
      }
    }
    if (foundWinner(numHits)) return true

    // SW to NE
    numHits = 0
    for (let diag = size - 1, colDiag = 0; diag >= 0; diag--, colDiag++) {
      if (grid[diag][colDiag] === currentIndicator) {
        numHits++
      }
    }
    if (foundWinner(numHits)) return true

    return 0
  }

  const handleCellClick = (row, col) => {
    if (!activeGame) return

    if (grid[row][col] === ' ') {
      grid[row][col] = currentIndicator
    }

    if (!checkForWinner()) {
      currentIndicator === 'X'
        ? setCurrentIndicator('O')
        : setCurrentIndicator('X')
      setDisplayValues(Object.assign({}, grid))
    }
  }

  return (
    <>
      <div className="flex  text-xl  mt-10 pt-10 justify-center">{status}</div>
      <div className="flex  text-xl  justify-center">
        <button
          onClick={() => handleSizeClick(3)}
          className="bg-teal-300  hover:bg-teal-400 text-xl p-10 m-10 border hover:shadow-lg  border-teal-700"
        >
          3x3
        </button>
        <button
          onClick={() => handleSizeClick(4)}
          className="bg-teal-300  hover:bg-teal-400 text-xl p-10 m-10 border hover:shadow-lg  border-teal-700"
        >
          4x4
        </button>
        <button
          onClick={() => handleSizeClick(5)}
          className="bg-teal-300  hover:bg-teal-400 text-xl p-10 m-10 border hover:shadow-lg  border-teal-700"
        >
          5x5
        </button>
        <button
          onClick={() => handleSizeClick(6)}
          className="bg-teal-300  hover:bg-teal-400 text-xl p-10 m-10 border hover:shadow-lg  border-teal-700"
        >
          6x6
        </button>
      </div>
      <div className="flex  text-xl  mt-10 pt-10 justify-center">
        <MainGrid
          grid={displayValues}
          size={size}
          clickHandler={handleCellClick}
        />
      </div>
    </>
  )
}

export default App
