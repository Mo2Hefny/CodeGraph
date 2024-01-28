import Cell from "./cell.js";

const NORMAL_SPEED = 100;

export const Grid = (() => {
  const grid = document.getElementById("grid");
  let cells = [];
  let visited = [];
  let startPosition = undefined;
  let gridSize;
  let selectedCellType = document
  .querySelector('input[type="radio"][name="cell-type"]:checked')
  .getAttribute("id");
  let remove = false;
  // Simulation
  let startedSimulation = false;
  let simulationSpeed;
  
  let mouseDown = false;
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
    console.log(`Ruler value: ${speed} Simulation Speed: ${simulationSpeed}`);
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
      cells.forEach((row) => {
        row.forEach((cell) => {
          if (cell.type === cellType)
            cell.type = "empty";
            cell.element.classList.remove(`${cellType}`);
        });
      });
      if (cellType === "start") {
        if (startPosition != undefined)
          cells[startPosition.y][startPosition.x].updateBorder(cells);
        startPosition = position;
      }
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
    if (clicked) remove = cells[y][x].element.classList.contains(type);
    if (remove) {
      cells[y][x].element.classList = "cell";
      cells[y][x].type = "empty";
    } else {
      cells[y][x].element.classList = `cell ${type}`;
      cells[y][x].type = type;
    }
  }

  const startSimulation = async () => {
    if (startedSimulation)  return;
    startedSimulation = true;
    visited = [];
    for (let i = 0; i < gridSize; i++) {
      visited[i] = [];
      for (let j = 0; j < gridSize; j++) {
        visited[i][j] = cells[i][j].type === "wall";
      }
    }
    console.log(`Starting simulation with speed of ${simulationSpeed}`);
    await BFS();
  };

  const BFS = async () => {
    const queue = [];
    queue.push(startPosition);
    visited[startPosition.y][startPosition.x] = true;
    cells[startPosition.y][startPosition.x].parent = undefined;
    const dx = [1, 0, -1, 0, 1, 1, -1, -1];
    const dy = [0, 1, 0, -1, -1, 1, 1, -1];
    let found = false;
    let position;
    while (queue.length > 0) {
      position = queue.shift();
      const X = position.x;
      const Y = position.y;
      cells[Y][X].visitCell();
      console.log(`checking (${X}, ${Y})`);

      // Found the end.
      if (cells[Y][X].type === "end") {
        found = true;
        break;
      }
      // Add adjacent cells.
      for (let i = 0; i < dx.length; i++) {
        const x = X + dx[i];
        const y = Y + dy[i];
        // Out of borders
        if (x < 0 || y < 0 || x >= gridSize || y >= gridSize) continue;
        // Wall or visited
        if (visited[y][x] === true || cells[y][x].type === "wall") continue;
        // Can't cut walls diagonally
        if (
          i === 4 &&
          (cells[Y + dy[3]][X + dx[3]].type === "wall" && cells[Y + dy[0]][X + dx[0]].type === "wall")
        )
          continue;
        if (
          i === 5 &&
          (cells[Y + dy[0]][X + dx[0]].type === "wall" && cells[Y + dy[1]][X + dx[1]].type === "wall")
        )
          continue;
        if (
          i === 6 &&
          (cells[Y + dy[2]][X + dx[2]].type === "wall" && cells[Y + dy[1]][X + dx[1]].type === "wall")
        )
          continue;
        if (
          i === 7 &&
          (cells[Y + dy[2]][X + dx[2]].type === "wall" && cells[Y + dy[3]][X + dx[3]].type === "wall")
        )
          continue;
        cells[y][x].checkCell();
        cells[y][x].parent = position;
        visited[y][x] = true;
        queue.push({ x, y });
      }
      await delay(10);
    }

    if (found) cells[position.y][position.x].setPath(cells);
    console.log(`found ${found}`);
  };

  return {
    setGrid,
    setSpeed,
    setSelectedMode,
    startSimulation,
  };
})();
