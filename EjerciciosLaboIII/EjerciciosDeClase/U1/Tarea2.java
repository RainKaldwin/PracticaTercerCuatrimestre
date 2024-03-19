package EjerciciosLaboIII.EjerciciosDeClase.U1;
import java.util.Scanner;

public class Tarea2 {
/*
 2. Hacer un programa que ingrese el precio de un artículo a la venta y calcule el
    precio con IVA.
 */

 public static void main(String[] args) {
    Scanner oScanner = new Scanner(System.in);
    final double IVA = 1.21;

    System.out.println("Ingrese el precio");
    double precio= oScanner.nextDouble();
    oScanner.close();

    double pFinal = precio*IVA;
    System.out.println("El precio Con Iva Agregado es: $"+pFinal+" Pesos");
 }
}
