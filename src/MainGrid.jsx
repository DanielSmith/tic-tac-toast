const MainGrid = ({ size, clickHandler }) => {
  let renderGrid = []
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      /* eslint-disable no-unused-vars */
      let key = `${row}_${col}`
      renderGrid.push(
        <div
          className="p-8 max-w-[50px] outline outline-1 bg-white hover:bg-slate-300"
          key={row + '_' + col}
          onClick={() => clickHandler(row, col)}
        >
          {row} {col}
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
