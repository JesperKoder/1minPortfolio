const dropdown = document.querySelector(".dropdown");
const dropButton = document.querySelector(".dropbtn");

dropButton.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});
