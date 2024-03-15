/*1-TOMAREMOS LOS ELEMENTOS HTML A TRAVEZ
    DEL ID
*/

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');


/*2-AHORA NECESITAMOS CONTEMPLAR TODAS LAS POSIBLES CONVINACIONES
*/

const possibleChoices = document.querySelectorAll('button');

//declaramos una variable global para la desicion del usuario y la computadora
let userChoice;
let computerChoice;
let result;

/*3-HACEMOS UNA FUNCION SEGUN EL EVENTO CLICK DEL BOTON
*/
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
// e dentro del parentesis es el evento
userChoice = e.target.id //target id conseguira el id respectivo del boton donde se hace el evento

//traemos el display de la desicion

userChoiceDisplay.innerHTML = userChoice //inner html mostrara el texto en

//Ahora queremos generar una desicion de la computadora, para esto creamos una funcion
generateComputerChoice()
getResult()
}))

function generateComputerChoice(){
 
    //lo que queremos ahora es generar un numero random
    const randomNumber = Math.floor(Math.random() * 3) + 1 //porque son 3 opciones
   // console.log(randomNumber) podemos comprobar que funciona

   if(randomNumber === 1){
    computerChoice = 'rock'
   }
   if(randomNumber === 2){
    computerChoice = 'paper'
   }
   if(randomNumber === 3){
    computerChoice = 'scissors'
   }
   
   computerChoiceDisplay.innerHTML= computerChoice
}

function getResult(){

    if(computerChoice === userChoice){
        result = 'Its a Draw!'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You Win!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'You Lost!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You Win!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You Lost!'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You Win!'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'You Lost!'
    }

    resultDisplay.innerHTML = result
}  