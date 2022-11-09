import { useState } from 'react'
import MainGrid from './MainGrid'
import './assets/main.css'

function App() {
  const [size, setSize] = useState(3)

  let grid = []

  const resetGrid = (size) => {
    grid = [] // clear out existing grid
    const filledArray = [...new Array(size)].map(() => ' ')

    for (let i = 0; i < size; i++) {
      grid.push(filledArray)
    }

    console.dir(grid)
  }

  const handleSizeClick = (size) => {
    resetGrid(size)
    setSize(size)
  }

  const handleCellClick = (row, col) => {
    console.log(` clicked on ${row}, ${col}`)
    grid[row][col] = 'x'

    console.dir(grid)
  }
  return (
    <>
      <div className="flex  text-xl  mt-10 pt-10 justify-center">
        Tic, Tac, Toast.
      </div>
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
        <MainGrid size={size} clickHandler={handleCellClick} />
      </div>
    </>
  )
}

export default App
