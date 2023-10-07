import "../css/styles.css";

const hamburgerIcon = document.getElementById("hamburger-icon");
const humburgerItems = document.querySelectorAll("#hamburger-items a");

document.getElementById("hamburger-icon").addEventListener("click", toggleMenu);
document.querySelectorAll("#hamburger-items a").forEach((item) => {
  item.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  const icon = document.querySelector(".hamburger-icon");
  const items = document.querySelector(".hamburger-items");
  icon.classList.toggle("open");
  items.classList.toggle("open");
}
