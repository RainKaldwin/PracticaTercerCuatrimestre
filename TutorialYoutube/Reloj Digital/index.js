//Utilizaremos el getelementbyid referenciando nuestros ids de html

const elmHora=document.getElementById("hora");
const elmMinuto=document.getElementById("minuto");
const elmSegundo=document.getElementById("segundo");
const elmAmPm=document.getElementById("ampm");

//funcion para conseguir los datos de la computadora

function actualizarReloj(){
    //conseguimos la hora de nuestra computadora usando un constructor
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    //control de que sea AM o PM

    let ampm="AM"

    if(h>12){
        h=h-12
        ampm="PM"
    }
    //le damos formato a la hora para que tenga 0 al comienzo
    //lo haremos con un if
    h= h<10 ? "0" + h : h;
    m= m<10 ? "0" + m : m;
    s= s<10 ? "0" + s : s;

    elmHora.innerText=h; 
    elmMinuto.innerText=m;
    elmSegundo.innerText=s;
    ampm.innerText=ampm;

    //llamaremos a la funcion cada segundo para que se actualice automaticamente la hora
    setTimeout(()=>{
        actualizarReloj()
    },1000)
}

actualizarReloj();