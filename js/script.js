const game_board = document.querySelector(".game-board")
const button_container = document.querySelector(".button-container")

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const btn = document.getElementById("button");

const jump=()=>
{
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump')
    },500); 
}

//animacao de verificacao
const loop = setInterval(()=>{

    console.log('loop')


    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    console.log(marioPosition);
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80)
    {

        pipe.style.animation='none';
        pipe.style.left='${pipePosition}px';

        mario.style.animation='none';
        mario.style.bottom='${marioPosition}px';

       mario.src='../images/game-over.png';
       mario.style.width = '55px'
       mario.style.marginLeft='50px'

       clearInterval('loop');
       
       
       setTimeout(() => {
         death_container()
       }, 200)
       
    }

}, 10);

function death_container() {
  
  const body = document.getElementsByTagName("body")[0]
  
  const display_death = document.createElement("div")
  
  const container_button_death = document.createElement("div")
  
  const button_volta = document.createElement("button")
  
  const h2 = document.createElement("h2")
  
  game_board.style.display = "none"
  button_container.style.display = "none"
  
  
  display_death.classList.add("death-container")
  container_button_death.classList.add("container-button-death")
  
  body.appendChild(display_death)
  
  display_death.appendChild(h2)
  
  display_death.appendChild(container_button_death)
  
  container_button_death.appendChild(button_volta)
  
  button_volta.addEventListener("click", recarregar)
  
  button_volta.innerHTML = "Reviver"
  
  h2.innerHTML = "Você morreu, kaaka"
  
  //Estilo no container_button_death
  
  container_button_death.style.display = "flex"
  container_button_death.style.justifyContent = "center"
  container_button_death.style.alignContent
  
  //Display flex no body
  
  body.style.display = "flex"
  body.style.justifyContent = "center"
  body.style.alignItems = "center"
  body.style.margin = "0px"
  body.style.height = "100vh"
  
  //Colocando estilo no death-container
  
  display_death.style.display = "flex"
  display_death.style.flexDirection = "column"
  display_death.style.justifyContent = "center"
  display_death.style.alignItems = "center"
  display_death.style.background = "linear-gradient(10deg, #913838, #FF6363)"
  display_death.style.padding = "10px"
  display_death.style.borderRadius = "10px"
  display_death.style.height = "50vh"
  display_death.style.width = "80vw"
  
  //Colocando estilo no h2 
  
  h2.style.color = "white"
  h2.style.textAlign = "center"
  
  //Colocando estilo no button
  
  button_volta.style.display = "block"
  button_volta.style.padding = "20px 50px"
  button_volta.style.background = "linear-gradient(10deg, #63FF92, #6CFF63)"
  button_volta.style.border = "none"
  button_volta.style.borderRadius = "10px"
  button_volta.style.color = "white"
  button_volta.style.fontWeight = "bolder"
  button_volta.style.fontSize = "20px"
  button_volta.style.margin = "25px auto"
  
  function recarregar() {
    location.reload();
  }
}

document.addEventListener('keydown',jump);
btn.addEventListener("click", jump)