import Cell from "./cell.js";

export const Grid = (() => {
  const grid = document.getElementById("grid");
  let cells = [];
  let startPosition;
  let gridSize;
  let mouseDown = false;
  let selectedCellType = document
    .querySelector('input[type="radio"][name="cell-type"]:checked')
    .getAttribute("id");
  let remove = false;
  grid.addEventListener("mousedown", () => {
    mouseDown = true;
  });
  grid.addEventListener("mouseup", () => {
    mouseDown = false;
  });
  grid.addEventListener("mousedown", editGrid);
  grid.addEventListener("mouseover", editGrid);

  function setSelectedMode() {
    selectedCellType = document
      .querySelector('input[type="radio"][name="cell-type"]:checked')
      .getAttribute("id");
  }

  /**
   * Create the grid cells.
   * @param {Number} size The size of the nxn grid
   */
  async function setGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size; i++) {
      cells[i] = [];
      for (let j = 0; j < size; j++) {
        const cell = new Cell(i, j);
        cells[i][j] = cell;
        grid.appendChild(cell.element);
      }
    }
    gridSize = size;
  }

  /**
   * Handle mouse input on grid.
   * @param {*} event
   */
  function editGrid(event) {
    if (!mouseDown) return;
    setSelectedMode();
    const position = getCellPosition(event);
    const cellType = selectedCellType.substring(selectedCellType.indexOf("-") + 1);
    if (["start", "end"].includes(cellType)) {
      const cell = grid.querySelector(`.${cellType}`);
      if (cellType === "start") startPosition = position;
      if (cell != undefined) cell.classList.remove(`${cellType}`);
    }
    setCellType(position, cellType, event.type === "mousedown");
    cells[position[1]][position[0]].updateBorder(cells);
  }

  function getCellPosition(event) {
    const rect = grid.getBoundingClientRect();
    const size = gridSize;
    const gridX = Math.floor(
      ((event.clientX - rect.left) * size) / grid.offsetWidth
    );
    const gridY = Math.floor(
      ((event.clientY - rect.top) * size) / grid.offsetWidth
    );
    console.log(gridX, gridY); // log the values of gridX and gridY
    return [gridX, gridY];
  }

  function setCellType(point, type, clicked) {
    if (clicked)
      remove = cells[point[1]][point[0]].element.classList.contains(type);
    if (remove) {
      cells[point[1]][point[0]].element.classList = "cell";
      cells[point[1]][point[0]].type = "empty";
    }
    else {
      cells[point[1]][point[0]].element.classList = `cell ${type}`;
      cells[point[1]][point[0]].type = type;
    }
  }

  const startSimulation = async () => {
    
  };

  return {
    setGrid,
    setSelectedMode,
  };
})();
