//tenemos que crear 12 cartas, vamos a ver como hacerlo desde js

//lo vamos a hacer con un array de objectos

const cardArray = [
    {
        name:'fries',
        img: 'images/fries.png',
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name:'pizza',
        img: 'images/pizza.png'
    },
    {
        name:'fries',
        img: 'images/fries.png',
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name:'pizza',
        img: 'images/pizza.png'
    }
]

//console.log(cardArray)


//usaremos el metodo sort para mezclar de forma random el array

cardArray.sort(()=> 0.5 - Math.random()) //random dara un valor numerico y la funcion mirara si es mayor o menor a 0.5 y repartira (sort) en funcion de eso

//utilizaremos nuestro array para mostrar la grilla en html

//usando # podemos buscar por un id

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

//creamos un array nuevo para guardar las cartas clickeadas y podes hacer match
let cardChosen = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        //usaremos createElement()
        const card = document.createElement('img')

        //usaremos setAttribute()
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        console.log(card, i)
        //USAMOS addEventListener()
        card.addEventListener('click',flipCard)
        //usamos appendChild()
        gridDisplay.appendChild(card)
    }
}

createBoard();

let cardsChosenIds = []
const cardsWon = []

function checkMatch(){
   const cards =  document.querySelectorAll('#grid img')
   const optionOneId = cardsChosenIds[0]
   const optionTwoId = cardsChosenIds[1]

    if(optionOneId === optionTwoId){    
        alert("Match")
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
    }


    //miramos si hacen match
    if(cardChosen[0] == cardChosen[1]){

        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        
        cardsWon.push(cardChosen)
    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert("Dont Match")
    }
    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    cardsChosenIds = []

    if(cardsWon.length === (cardArray.length)/2){
        resultDisplay.textContent = 'Game Completed!'
    }
}   

function flipCard(){

    //this nos dejera usar el elemento que clickemos
    const cardId = this.getAttribute('data-id')
    //usamos push() para meter un item al array
    //en este caso el nombre de la carta
    cardChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId)

    //agregaremos la imagen
    this.setAttribute('src',cardArray[cardId].img)
    
    //control del  match de cartas

    if(cardChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}
