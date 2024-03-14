
//creamos una constante que guarda todos los elementos que tengan la tang button
const  elmBotones = document.querySelectorAll("button");

const elmImput =  document.getElementById("resultado");

for(let i = 0 ; i < elmBotones.length;i++){
//Haremos que cada vez que alguien apriete el boton
// llamara una funcion que movera el texto del btn al display
 elmBotones[i].addEventListener("click",()=>{

    const valorBoton=elmBotones[i].textContent;

    //pondremos condiciones para diferencias las funcionalidades
    if(valorBoton == "C"){
        LimpiarResultado()
    }
    else if(valorBoton === "="){
        Calcular()
    }
    else{
        AgregarValor(valorBoton)
    }

 })
}

function LimpiarResultado(){
elmImput.value="";
}

function Calcular(){
    //usaremosu evaluate que es una funcion propia de js que evalua un string como si fuera codigo
    elmImput.value = eval(elmImput.value);
}

function AgregarValor(valorBoton){
 elmImput.value += valorBoton
}