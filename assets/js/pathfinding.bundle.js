/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/algorithms/pathfinding.js":
/*!******************************************!*\
  !*** ./src/js/algorithms/pathfinding.js ***!
  \******************************************/
/***/ (() => {

eval("const delay = ms => new Promise(res => setTimeout(res, ms));\r\nlet cells = [];\r\nlet selectedMode = undefined;\r\nlet startedSimulation = false;\r\nlet mouseDown = false;\r\nconst grid = document.querySelector('.animation-area');\r\nconst sizeSlider = document.getElementById('size-range');\r\nsetGrid(sizeSlider.value);\r\nconst speedSlider = document.getElementById('speed-range');\r\nlet animationSpeed = 1000 / speedSlider.value;\r\n\r\nconst setStartButton = document.getElementById('set-start');\r\nconst setEndButton = document.getElementById('set-end');\r\nconst setWallButton = document.getElementById('set-wall');\r\nsetStartButton.addEventListener('click', setSelectedMode);\r\nsetEndButton.addEventListener('click', setSelectedMode);\r\nsetWallButton.addEventListener('click', setSelectedMode);\r\n\r\ngrid.addEventListener(\"mousedown\", () => {\r\n  mouseDown = true;\r\n});\r\ngrid.addEventListener(\"mouseup\", () => {\r\n  mouseDown = false;\r\n});\r\n\r\ngrid.addEventListener(\"mousedown\", editGrid);\r\ngrid.addEventListener(\"mouseover\", editGrid);\r\n\r\nfunction setSelectedMode(event) {\r\n  if (selectedMode != undefined) selectedMode.classList.remove('active');\r\n  selectedMode = event.target;\r\n  selectedMode.classList.add('active');\r\n}\r\n\r\nfunction setGrid(size)\r\n{\r\n  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;\r\n  for (let i = 0; i < size; i++)\r\n  {\r\n    cells[i] = [];\r\n    for (let j = 0; j < size; j++)\r\n    {\r\n      const block = createGridBlock(i, j, size);\r\n      cells[i][j] = block;\r\n      grid.appendChild(block);\r\n    }\r\n  }\r\n}\r\n\r\nfunction createGridBlock(i, j, size) {\r\n  const block = document.createElement('cell');\r\n  if (i === 0) block.classList.add('top');\r\n  if (i === size - 1) block.classList.add('bottom');\r\n  if (j === 0) block.classList.add('left');\r\n  if (j === size - 1) block.classList.add('right');\r\n  grid.appendChild(block);\r\n  return block;\r\n}\r\n\r\nfunction editGrid(event) {\r\n  if (startedSimulation || !mouseDown) return;\r\n  if (selectedMode === undefined) return;\r\n  let cellType = selectedMode.getAttribute('id');\r\n  cellType = cellType.substring(cellType.indexOf('-') + 1);\r\n  if ([\"start\", \"end\"].includes(cellType)) {\r\n    const cell = grid.querySelector(`.${cellType}`);\r\n    if (cell != undefined)\r\n    cell.classList = \"\";\r\n  }\r\n  setCellType(getCellPosition(event), cellType, event.type === 'mousedown');\r\n}\r\n\r\nfunction getCellPosition(event) {\r\n  const rect = grid.getBoundingClientRect();\r\n  const size = sizeSlider.value;\r\n  const gridX = Math.floor((event.clientX - rect.left) * size / grid.offsetWidth);\r\n  const gridY = Math.floor((event.clientY - rect.top) * size / grid.offsetWidth);\r\n  console.log(gridX, gridY); // log the values of gridX and gridY\r\n  return [gridX, gridY];\r\n}\r\n\r\nlet remove = false;\r\nfunction setCellType(point, type, clicked)\r\n{\r\n  if (clicked)\r\n    remove = cells[point[1]][point[0]].classList.contains(type);\r\n  if (remove)\r\n    cells[point[1]][point[0]].classList = \"\";\r\n  else\r\n  cells[point[1]][point[0]].classList = type;\r\n}\n\n//# sourceURL=webpack://CodeGraph/./src/js/algorithms/pathfinding.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/algorithms/pathfinding.js"]();
/******/ 	
/******/ })()
;