let blocks = [];
let CurrSize = 2;
const grid = document.querySelector('.animation-area');

setGrid(CurrSize);
function setGrid(size)
{
  const sizeEm = size * 16;
  let columnSize = grid.offsetWidth / sizeEm;
  let rowSize = grid.offsetHeight / sizeEm;
  for (let i = 0; i < rowSize; i++)
  {
    let row = document.createElement('div');
    row.classList.add('block-row');
    row.style.width = '100%';
    blocks[i] = [];
    for (let j = 0; j < columnSize; j++)
    {
      const block = createGridBlock(sizeEm - 4);
      blocks[i][j] = block;
      row.appendChild(block);
    }
    grid.appendChild(row);
  }
}

function createGridBlock(size) {
  const block = document.createElement('div');
  const GAP = 4;
  block.classList.add('block');
  grid.appendChild(block);
  return block;
}