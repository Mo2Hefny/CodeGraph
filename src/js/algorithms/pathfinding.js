import { Grid } from "./grid.js";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
let startedSimulation = false;
const sizeSlider = document.getElementById("size-range");
Grid.setGrid(sizeSlider.value);
sizeSlider.addEventListener('change', () => {Grid.setGrid(sizeSlider.value);});
const speedSlider = document.getElementById("speed-range");
let animationSpeed = 1000 / speedSlider.value;