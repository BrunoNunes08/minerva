const buttonMenu = document.querySelector(".button-menu");
const menu = document.querySelector(".menu");
const backdrop = document.querySelector(".backdrop");
buttonMenu.addEventListener("click", (e) => {
    menu.classList.toggle("closed");
    backdrop.style.display = "block";
});
backdrop.addEventListener("click", (e) => {
    menu.classList.add("closed");
    backdrop.style.display = "none";
})