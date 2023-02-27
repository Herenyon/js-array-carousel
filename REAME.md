creo un array arrayImg contenente le 5 immagini

creo un let valoreBottoni = 0 

creo un let immagini = '' per poter metterci mettere le immagini del mio array più avanti

creo un const incrementoBtn = document.getElementByIt(classe freccia in su) e un const decrementoBtn = document.getElementByIt(classe freccia in giù)

creo un for( let i = 0; i <= arrayImg.length; i++) con all'interno un immagini += `<div class="img"><img src="img/${arrayImg[i]}"></div>` così da poter inserire tutte le immagini dell'array nell'html

creo due addEventListener(click, ), uno "bindato" sulla freccia di sopra e l'altro sulla freccia di sotto

il primo addEventListener(click, ) avrà all'interno valoreBottoni++ e un if(valoreBottoni === arrayImg.length){vaolreBottoni = 0}

il secondo addEventListener(click, ) avrà all'interno valoreBottoni-- if(valoreBottoni === -1){vaolreBottoni = arrayImg.length}

