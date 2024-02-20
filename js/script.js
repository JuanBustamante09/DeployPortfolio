const submenu = document.getElementById("activeButton")
const activeMenu = document.getElementById("activeSubMenu")
const activeListMenu = document.getElementById("listSubMenu")
const closedMenu = document.getElementById("closeButton")

submenu.addEventListener('click', (event) => {
    activeMenu.style.width = '15rem';
    activeListMenu.style.display = 'block';
    submenu.style.display = 'none';
    closedMenu.style.display = 'block';
});

closedMenu.addEventListener('click', (event) => {
    activeMenu.style.width = '0rem';
    activeListMenu.style.display = 'none';
    submenu.style.display = 'block';
    closedMenu.style.display = 'none';
});