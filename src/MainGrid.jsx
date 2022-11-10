import { useEffect } from 'react'

const MainGrid = ({ grid, size, clickHandler }) => {
  let renderGrid = []

  useEffect(() => {
    console.log('new....')
    console.log(grid)

    return () => {
      // second
    }
  }, [grid])

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      /* eslint-disable no-unused-vars */
      let key = `${row}_${col}`

      let indicator = grid?.[row]?.[col] ?? ' '
      renderGrid.push(
        <div
          className="p-6 min-w-[5rem] min-h-[5rem] outline outline-1 bg-white hover:bg-slate-300"
          key={row + '_' + col}
          onClick={() => clickHandler(row, col)}
        >
          {indicator}
        </div>
      )
    }
  }

  let gc = `grid grid-cols-${size} gap-0 bg-red-100`

  return (
    <div className={gc} key="1">
      {renderGrid}
    </div>
  )
}

export default MainGrid
