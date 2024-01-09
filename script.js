let showMenu = document.getElementById("barSolid");
const sideBar = document.querySelector(".sidebar");
const hideMenu = document.getElementById("xmark");

showMenu.addEventListener("click", showSidebar => {
    sideBar.style.display = "flex";
});

hideMenu.addEventListener("click", hideMenu => {
    sideBar.style.display = "none";
})