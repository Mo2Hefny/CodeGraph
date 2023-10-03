const delay = ms => new Promise(res => setTimeout(res, ms));
let cells = [];
let selectedMode = undefined;
let startedSimulation = false;
let mouseDown = false;
const grid = document.querySelector('.animation-area');
const sizeSlider = document.getElementById('size-range');
setGrid(sizeSlider.value);
const speedSlider = document.getElementById('speed-range');
let animationSpeed = 1000 / speedSlider.value;

const setStartButton = document.getElementById('set-start');
const setEndButton = document.getElementById('set-end');
const setWallButton = document.getElementById('set-wall');
setStartButton.addEventListener('click', setSelectedMode);
setEndButton.addEventListener('click', setSelectedMode);
setWallButton.addEventListener('click', setSelectedMode);

grid.addEventListener("mousedown", () => {
  mouseDown = true;
});
grid.addEventListener("mouseup", () => {
  mouseDown = false;
});

grid.addEventListener("mousedown", editGrid);
grid.addEventListener("mouseover", editGrid);

function setSelectedMode(event) {
  if (selectedMode != undefined) selectedMode.classList.remove('active');
  selectedMode = event.target;
  selectedMode.classList.add('active');
}

function setGrid(size)
{
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size; i++)
  {
    cells[i] = [];
    for (let j = 0; j < size; j++)
    {
      const block = createGridBlock(i, j, size);
      cells[i][j] = block;
      grid.appendChild(block);
    }
  }
}

function createGridBlock(i, j, size) {
  const block = document.createElement('cell');
  if (i === 0) block.classList.add('top');
  if (i === size - 1) block.classList.add('bottom');
  if (j === 0) block.classList.add('left');
  if (j === size - 1) block.classList.add('right');
  grid.appendChild(block);
  return block;
}

function editGrid(event) {
  if (startedSimulation || !mouseDown) return;
  if (selectedMode === undefined) return;
  let cellType = selectedMode.getAttribute('id');
  cellType = cellType.substring(cellType.indexOf('-') + 1);
  if (["start", "end"].includes(cellType)) {
    const cell = grid.querySelector(`.${cellType}`);
    if (cell != undefined)
    cell.classList = "";
  }
  setCellType(getCellPosition(event), cellType, event.type === 'mousedown');
}

function getCellPosition(event) {
  const rect = grid.getBoundingClientRect();
  const size = sizeSlider.value;
  const gridX = Math.floor((event.clientX - rect.left) * size / grid.offsetWidth);
  const gridY = Math.floor((event.clientY - rect.top) * size / grid.offsetWidth);
  console.log(gridX, gridY); // log the values of gridX and gridY
  return [gridX, gridY];
}

let remove = false;
function setCellType(point, type, clicked)
{
  if (clicked)
    remove = cells[point[1]][point[0]].classList.contains(type);
  if (remove)
    cells[point[1]][point[0]].classList = "";
  else
  cells[point[1]][point[0]].classList = type;
}