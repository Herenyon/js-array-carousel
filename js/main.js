'use script'

const arrayImg = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp',];

let valoreBottoni = 0;

let immagini = '';

const incrementoBtn = document.getElementById(giacomo);
const decrementoBtn = document.getElementById(btnGiu);

console.log(giacomo);
for (let i = 0; i <= arrayImg.length; i++) {

    immagini += `<div class="img"><img src="img/${arrayImg[i]}"></div>`;



}

incrementoBtn.addEventListener('click',
    function(){
        valoreBottoni++;

        if (valoreBottoni === arrayImg.length){
            
            valoreBottoni = 0;

        }

        console.log(valoreBottoni)
    }
    
    
)

decrementoBtn.addEventListener('click',
    function(){
        valoreBottoni = arrayImg.length;

        if (valoreBottoni === -1) { 
            
            valoreBottoni = arrayImg.length 
        
        }

        console.log(valoreBottoni)
        

    }
    
    
    
)