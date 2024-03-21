//declaracion IF

if (condition) {
    statement_1_runs_if_condition_is_true;
    statement_2_runs_if_condition_is_true;
  } else {
    statement_3_runs_if_condition_is_false;
    statement_4_runs_if_condition_is_false;
  }

// checkData devuelve true si el numero de caracteres
// de un objeto text es 3
//de lo contrario muestra false

function checkData(){
    if(document.form1.threeChar.value.length == 3){
        return true;
    } else{
        alert("Introduce exactamente 3 caracteres."+ `${document.form1.threeChar.value} no es valido.`,);
        return false;
    }
   
}

//declaracion Switch

switch (expression) {
    case label_1:
      statements_1
      break;
    case label_2:
      statements_2
      break;
    default:
      statements_def
      break;
  }
/*
si fruittype se evalúa como 'Bananas', 
el programa hace coincidir el valor con el caso 
'Bananas' y ejecuta la declaración asociada. 
Cuando se encuentra break, el programa sale del switch 
y continúa la ejecución de la instrucción que sigue a 
switch. Si se omitiera break, también se ejecutará la 
instrucción para case 'Cherries'.
*/
  switch (fruittype) {
    case "Oranges":
      console.log("Las naranjas cuestan $0.59 la libra.");
      break;
    case "Apples":
      console.log("Las manzanas cuestan $0.32 la libra.");
      break;
    case "Bananas":
      console.log("Los plátanos cuestan $0.48 la libra.");
      break;
    case "Cherries":
      console.log("Las cerezas cuestan $3.00 la libra.");
      break;
    case "Mangoes":
      console.log("Los mangos cuestan $0.56 la libra.");
      break;
    case "Papayas":
      console.log("Los mangos y las papayas cuestan $2.79 la libra.");
      break;
    default:
      console.log(`Lo sentimos, no tenemos ${fruittype}.`);
  }
  console.log("¿Hay algo más que quieras?");
  