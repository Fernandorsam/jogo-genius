let order = [];
let clickorder = [];
let score = 0;
let cont = 1;
let conta = 0


const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const acertos = document.querySelector('#acertos');
const erros = document.querySelector('#erros');

let shuffleorder = ()=>{
let colororder = Math.floor(Math.random() * 4);
order[order.length] = colororder;

clickorder = [];


for(let i in order){
    let elementcolor = createColorElement(order[i]);
    lightColor[elementcolor,Number(i)+i];
}


}
let lightColor = (element , number)=>{
    number = number  * 500;
    setTimeout(()=>{
      element.classList.add('selected');
    },number-250);
    setTimeout( () =>{
        element.classList.remove('selected');
    });
}

let checkorder = ()=>{
    for (let i in clickorder) {
        if (clickorder[i] != order[i]) {
            erros.innerHTML = conta++;
            gameover();
            if(conta >50){
                acertos.innerHTML = "";
                erros.innerHTML='';
                alert("GAME OVER!!!!\n iniciando jogo" )
              cont = 1;
              conta = 1;
            }
            break;
            
            
        }
    }
    if(clickorder.length == order.length){
       acertos.innerHTML = cont++;
        if(cont >50){alert('parabéns vc passou de nivel');
        nextLevel();
      }
    }

}

let click = (color)=>{
    clickorder[clickorder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        checkorder();
    },250);
    
}
 let createColorElement = (color)=>{
     if(color == 0){
         return green;

     }
     else if(color == 1){
         return red;
     }
     else if(color == 2){
         return yellow; 
     } else if (color == 3){
         return blue;
     }
 }
  let nextLevel = ()=>{
      score++;
      shuffleorder();

  }
  let gameover = () => {
     
      order = [];
      clickorder = [];

      playgame();
  }
   let playgame = () => {
       score = 0;
       nextLevel();
   }



   green.onclick= () => click(0); 
   red.onclick= () => click(1); 
   yellow.onclick= () => click(2); 
   blue.onclick= () => click(3); 



   playgame();