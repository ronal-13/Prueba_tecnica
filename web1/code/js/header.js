const button = document.querySelector("header .top > button");
const menu   = document.querySelector("header .menu");
const x      = document.querySelector("header .menu img");

button.addEventListener("click", ()=>{
    menu.classList.add("active");
    document.body.style.filter = "";
    x.style.display = "block";
});

x.addEventListener("click", ()=>{
    menu.classList.remove("active");
    x.style.display = "none";
});