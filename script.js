const button = document.getElementById("menu");
const mobilenav = document.getElementById("mobileNav");

button.onclick = function(){
    button.classList.toggle("active");
    mobilenav.classList.toggle("active");
}

