const arrow1   = document.querySelectorAll(".preguntas .questions.first img");
const parrafo1 = document.querySelectorAll(".preguntas .questions.first p");
const arrow2   = document.querySelectorAll(".preguntas .questions.second img");
const parrafo2 = document.querySelectorAll(".preguntas .questions.second p");
let flags1      = [];
let flags2      = [];

//Rellenamos los vectores de true
//El número de elementos es igual al número de preguntas de la pagina
for(let i = 0; i<8;i++) {
    flags1[i] = true;
    flags2[i] = true;
}

/********* Logica para el primer grupo de preguntas */
arrow1.forEach((ar,index) => {
    ar.addEventListener("click", ()=>{
        /*****Iniabilitamos las preguntas activas ******/
        parrafo1.forEach((p,i)=>{
            if(i != index) {
                p.classList.remove("active");
            }
        });

        /********(cambiamos)Inabilitamos la imagen de la flechas */
        arrow1.forEach(ar=>{
            ar.src = "../../recursos/svg/chevron-down.svg";
        });

        /*******Reiniciamos los valores de los flags1 a excepcion del que se le hizo click *******/
        flags1.forEach((fg,i)=>{
            if(i != index) {
                flags1[i] = true;
            }
        })
        /********* Habilitamos la pregunta a la que se hizo click */
        parrafo1[index].classList.toggle("active");

        /*********** Camibiamos de imagen segun corresponda ********** */
        if(flags1[index] == true) {
            flags1[index] = false;
            arrow1[index].src = "../../recursos/svg/chevron-up.svg";
        }
        else {
            flags1[index] = true;
            arrow1[index].src = "../../recursos/svg/chevron-down.svg";
        }
    });
});


/********** Misma logica para el segundo grupo de preguntas */
arrow2.forEach((ar,index) => {
    ar.addEventListener("click", ()=>{
        /*****Iniabilitamos las preguntas activas ******/
        parrafo2.forEach((p,i)=>{
            if(i != index) {
                p.classList.remove("active");
            }
        });

        /********(cambiamos)Inabilitamos la imagen de la flechas */
        arrow2.forEach(ar=>{
            ar.src = "../../recursos/svg/chevron-down.svg";
        });

        /*******Reiniciamos los valores de los flags1 a excepcion del que se le hizo click *******/
        flags2.forEach((fg,i)=>{
            if(i != index) {
                flags2[i] = true;
            }
        })
        /********* Habilitamos la pregunta a la que se hizo click */
        parrafo2[index].classList.toggle("active");

        /*********** Camibiamos de imagen segun corresponda ********** */
        if(flags2[index] == true) {
            flags2[index] = false;
            arrow2[index].src = "../../recursos/svg/chevron-up.svg";
        }
        else {
            flags2[index] = true;
            arrow2[index].src = "../../recursos/svg/chevron-down.svg";
        }
    });
});