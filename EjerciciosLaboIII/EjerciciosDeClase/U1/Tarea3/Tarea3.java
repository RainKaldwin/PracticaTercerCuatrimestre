package EjerciciosLaboIII.EjerciciosDeClase.U1.Tarea3;
import java.util.Scanner;

public class Tarea3 {
    
/*
3. Hacer un programa que ingrese los datos de una factura en la cual haya tres
artículos vendidos. De cada artículo ingresar el precio unitario y la cantidad.
Finalmente imprimir el total de la factura
 */

public static void main(String[] args) {

    
//creamos el scanner
Scanner oScanner = new Scanner(System.in);

//lo vamos a hacer con un array de objetos, lo llamare carrito
Carrito [] aCarrito;
aCarrito= new Carrito[3];

//carga de productos
for(int i =0;i<aCarrito.length;i++){
    Carrito oCarrito;
    System.out.println("Ingresar detalles del objeto "+(i+1)+":");
    System.out.println("Nombre:");
    String nombre = oScanner.next();
    System.out.println("Precio_Unitario:");
    double pre_Unitario = oScanner.nextDouble();
    System.out.println("Cantidad:");
    int cantidad = oScanner.nextInt();
    double total = pre_Unitario*cantidad;

    oCarrito = new Carrito(nombre, pre_Unitario, cantidad, total);
    aCarrito [i]= oCarrito;


}
oScanner.close();

for(int i=0;i<aCarrito.length;i++){

    aCarrito[i].MostrarCarrito();
}
}

}

