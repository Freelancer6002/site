const wr = document.querySelector(".wrapper");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
   button.style.display = "none";
   wr.style.display = "flex";
});