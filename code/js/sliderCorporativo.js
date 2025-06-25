const sliderMove = document.querySelector(".eleccion .sliderMove");
const items      = document.querySelectorAll(".eleccion .slider li");

items.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        move(index);
        items.forEach(it=>{
            it.style.backgroundColor = "rgba(255,0,0,.3)";
        });
        item.style.backgroundColor = "red";
    });
});

function move(number) {
    sliderMove.style.transform = `translateX(-${100/8 * number}%)`;
}