let blocks = [];
let selectedMode = "";
let startedSimulation = false;
const grid = document.querySelector('.animation-area');
const sizeSlider = document.getElementById('size-range');
setGrid(sizeSlider.value);
const speedSlider = document.getElementById('speed-range');
const setStartButton = document.getElementById('set-start');
const setEndButton = document.getElementById('set-end');
const setWallButton = document.getElementById('set-wall');

setStartButton.addEventListener('click', setSelectedMode);
function toggle(b){b.value=(b.value=="ON")?"OFF":"ON";}

function setSelectedMode(event) {
  const ID = event.type.getAttribute('id');
  
}

function setGrid(size)
{
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size; i++)
  {
    blocks[i] = [];
    for (let j = 0; j < size; j++)
    {
      const block = createGridBlock(i, j, size);
      blocks[i][j] = block;
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
  const cell = event.type.closest('cell');
  if (cell === undefined || startedSimulation) return;
  
}