'use script'

const arrayImg = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
console.log(arrayImg.length);
let valoreBottoni = 0;
console.log(valoreBottoni);
let immagini = '';

const containerImg = document.querySelector('.containerImg');
const incrementoBtn = document.getElementById("btnSu");
const decrementoBtn = document.getElementById("btnGiu");


for (let i = 0; i < arrayImg.length; i++) {

    immagini += `<div class="img"><img src="img/${arrayImg[i]}"></div>`;
    

}
containerImg.innerHTML = containerImg.innerHTML + immagini;

document.querySelector(".img").classList.add("show");
const pictures = document.querySelectorAll('.img');
console.log(pictures);
console.log(valoreBottoni);

incrementoBtn.addEventListener('click',
    function(){
        valoreBottoni++;
   
        if (valoreBottoni === arrayImg.length){
            
            valoreBottoni = 0;

        }

    
    }
    
   
)

decrementoBtn.addEventListener('click',
    function(){
        valoreBottoni--;
        pictures[valoreBottoni].classList.remove('show');
        
        if (valoreBottoni === -1) { 
            
            valoreBottoni = arrayImg.length;
        
        }

        console.log(valoreBottoni);
        

    }
    
    
    
)