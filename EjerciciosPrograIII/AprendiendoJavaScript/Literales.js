//Arreglos Literales

/*
 lista de cero o más expresiones, 
 cada una de las cuales representa un 
 elemento del arreglo, encerrada entre corchetes ([]).
 Cuando creas un arreglo utilizando un arreglo literal, 
 se inicia con los valores especificados como sus elementos, 
 y su length se establece en el número de argumentos 
 especificado.
*/

let coffees=["French Roast","Colombian","Kona"];

/*
No tienes que especificar todos los elementos
en un arreglo literal. Si colocas dos comas en una fila,
el arreglo completa el valor undefined para los elementos
no especificados.
*/

let fish=["Lion",,"Angel"];

/*
Este arreglo tiene dos elementos con valores y un elemento vacío:

fish[0] es "Lion"
fish[1] es undefined
fish[2] es "Angel"

*/

//Booleanos Literales

let x = true;
let y = false;

//Literales Numericos y flotantes

let z = 1;
let a = 1.3;
let b = 0xf1A7; //Hex

//objetos literales

/*
Un objeto literal es una lista de cero o más pares 
de nombres de propiedad y valores asociados de un objeto, 
entre llaves ({}).
*/

var sales = "Toyota";

function carTypes(name){
    if(name==="Honda"){
        return name;
    } else{
        return "Lo sentimos no vendemos "+name+".";
    }
}

var car ={
    myCar:"Saturn",
    getCar:carTypes("Honda"),
    special:sales
};

//usar literal numerico para anidar
var car = {manyCars:{a:"Saab",b:"Jeep",},7:"Mazda"};

//cadenas literales
'foo';
"bar";
"1234"