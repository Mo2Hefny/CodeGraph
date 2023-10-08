import Cell from "./cell.js";

const NORMAL_SPEED = 200;

export const Grid = (() => {
  const grid = document.getElementById("grid");
  let cells = [];
  let visited = [];
  let startPosition;
  let gridSize;
  let simulationSpeed;
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

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  function setSpeed(speed) {
    simulationSpeed = NORMAL_SPEED / speed;
  }

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
    grid.innerHTML = "";
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
    const cellType = selectedCellType.substring(
      selectedCellType.indexOf("-") + 1
    );
    if (["start", "end"].includes(cellType)) {
      const cell = grid.querySelector(`.${cellType}`);
      if (cellType === "start") startPosition = position;
      if (cell != undefined) cell.classList.remove(`${cellType}`);
    }
    setCellType(position, cellType, event.type === "mousedown");
    cells[position.y][position.x].updateBorder(cells);
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
    return { x: gridX, y: gridY };
  }

  function setCellType(point, type, clicked) {
    const x = point.x;
    const y = point.y;
    if (clicked)
      remove = cells[y][x].element.classList.contains(type);
    if (remove) {
      cells[y][x].element.classList = "cell";
      cells[y][x].type = "empty";
    } else {
      cells[y][x].element.classList = `cell ${type}`;
      cells[y][x].type = type;
    }
  }

  const startSimulation = async () => {
    visited = [];
    for (let i = 0; i < gridSize; i++) {
      visited[i] = [];
      for (let j = 0; j < gridSize; j++) {
        visited[i][j] = false;
      }
    }

    BFS();
  };

  const BFS = async () => {
    const queue = [];
    queue.push(startPosition);
    visited[startPosition.y][startPosition.x] = true;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    let found = false;
    while (queue.length > 0) {
      const position = queue.shift();
      cells[position.y][position.x].visitCell();
      console.log(`checking (${position.x}, ${position.y})`);

      // Found the end.
      if (cells[position.y][position.x].type === "end") {
        found = true;
        break;
      }
      // Add adjacent cells.
      for (let i = 0; i < dx.length; i++) {
        const x = position.x + dx[i];
        const y = position.y + dy[i];
        if (x < 0 || y < 0 || x >= gridSize || y >= gridSize) continue;
        if (visited[y][x] || cells[y][x].type === "wall") continue;
        cells[y][x].checkCell();
        visited[y][x] = true;
        queue.push({x, y});
        await delay(simulationSpeed);
      }
      await delay(simulationSpeed);
    }
    console.log(`found ${found}`);
  };

  return {
    setGrid,
    setSpeed,
    setSelectedMode,
    startSimulation,
  };
})();
