const sliderMove = document.querySelector(".variedad .sliderMove");
const buttons    = document.querySelectorAll(".variedad .arrow");
let number = 0, res1000 = false;
let limitSup = 6;

buttons[0].addEventListener("click", ()=>{
    number--;
    move(number);
    if(number == 0) {
        buttons[0].style.zIndex = -1;
    }
    buttons[1].style.zIndex = 1;
});

buttons[1].addEventListener("click", ()=>{
    number++;
    move(number);
    if(number == limitSup) {
        buttons[1].style.zIndex = -1;
    }
    buttons[0].style.zIndex = 1;
});

function move() {
    sliderMove.style.transform = `translateX(-${100/9 * number}%)`;
}

if(window.innerWidth <= 640) {
    limitSup = 8;
}
else if(window.innerWidth <= 1000) {
    limitSup = 7;
}