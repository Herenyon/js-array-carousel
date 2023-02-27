'use script'

const arrayImg = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

let immagini = '';
const containerImg = document.querySelector('.containerImg');

for (let i = 0; i < arrayImg.length; i++) {

    immagini += `<div class="img"><img src="img/${arrayImg[i]}"></div>`;


}
containerImg.innerHTML = containerImg.innerHTML + immagini;
document.querySelector(".img").classList.add("show");

const incrementoBtn = document.getElementById("btnSu");
const decrementoBtn = document.getElementById("btnGiu");

let valoreBottoni = 0;
const pictures = document.querySelectorAll('.img');

console.log(valoreBottoni);

incrementoBtn.addEventListener('click',
    function () {

        console.log(valoreBottoni)
        if (valoreBottoni < arrayImg.length - 1) {


            pictures[valoreBottoni].classList.remove('show');
            valoreBottoni++;
            pictures[valoreBottoni].classList.add('show');

        }
    }
)

decrementoBtn.addEventListener('click',
    function () {

        if (valoreBottoni > 0) {

            pictures[valoreBottoni].classList.remove('show');
            valoreBottoni--;
            pictures[valoreBottoni].classList.add('show');

        }
    }
)