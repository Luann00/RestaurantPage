import "./styles.css";

import displayHome from "./homemenu.js";
import displayMenu from "./menu.js";



const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const aboutButton = document.getElementById("aboutButton");


const content = document.getElementById('content');



displayHome();


homeButton.addEventListener("click", function () {
    content.innerHTML = ""

    displayHome();
});


menuButton.addEventListener("click", function () {
    content.innerHTML = ""

    displayMenu();
});

