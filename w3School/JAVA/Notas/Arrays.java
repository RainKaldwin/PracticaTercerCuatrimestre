package w3School.JAVA.Notas;
import java.util.ArrayList;


public class Arrays {//Agregar items a la lista


public static void main(String[] args) {

//Agregar items a la lista
ArrayList<String> cars= new ArrayList<String>(); 
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");
cars.add("Mazda");

System.out.println(cars);

//acceder a un item
System.out.println(cars.get(0));

//cambiar un item
cars.set(0,"Fiat");
System.out.println(cars.get(0));

//eliminar un item
cars.remove(0);

//mostrar la cantidad de elementos de la lista
System.out.println("Hay: "+cars.size()+" Elementos en la lista");

//recorrer la lista
for(int i=0;i<cars.size();i++){
    System.out.println(cars.get(i));
}

}

}
