import "../css/styles.css";

function toggleMenu() {
  const icon = document.querySelector(".hamburger-icon");
  const items = document.querySelector(".hamburger-items");
  icon.classList.toggle("open");
  items.classList.toggle("open");
}
