import { Grid } from "./grid.js";

let startedSimulation = false;
const sizeSlider = document.getElementById("size-range");
const speedSlider = document.getElementById("speed-range");
Grid.setGrid(sizeSlider.value);
Grid.setSpeed(speedSlider.value);
sizeSlider.addEventListener('change', () => {Grid.setGrid(sizeSlider.value);});
speedSlider.addEventListener('change', () => {Grid.setSpeed(speedSlider.value);});
let animationSpeed = 1000 / speedSlider.value;

document.getElementById('start-simulation').addEventListener('click', Grid.startSimulation);