const navMenu = document.getElementById("navmenu");
const navAtivar = document.getElementById("navativar");
const navFechar = document.getElementById("navfechar");
const navLink = document.getElementById("navlink");

if(navAtivar){
    navAtivar.addEventListener("click", () => {
        navMenu.classList.add("mostrarmenu");
    })
}

if(navFechar){
    navFechar.addEventListener("click", ()=> {
        navMenu.classList.remove("mostrarmenu");
    })
}

const LinkAcao = () => {
    navMenu.classList.remove("mostrarmenu");
}

navLink.forEach(n => n.addEventListener("click", LinkAcao));