package EjerciciosLaboIII.EjerciciosDeClase.U1;
import java.util.Scanner;

public class Tarea1 {
    

    public static void main(String[] args) {
        /*
     1.Declarar dos variables enteras y cargar sus valores por teclado. Informar su 
      suma, diferencia, producto y cociente.
     */

     //Creamos el scanner

     Scanner oScanner = new Scanner(System.in);

     //Declaramos dos variables enteras
     System.out.println("Ingrese el primer Numero");
     int num1 = oScanner.nextInt();
     System.out.println("Ingrese el segundo Numero");
     int num2 = oScanner.nextInt();
     oScanner.close();

     System.out.println("El primer Numero es: "+num1+"\n"+"El segundo Numero es: "+num2);

     //Defino variales producto del calculo
     int suma=num1+num2;
     int resta=num1-num2;
     int producto=num1*num2;
     int cociente=num1/num2;

     //muestro los resultados

     System.out.println("Sumandolos Resultara: "+suma);
     System.out.println("Restandolos Resultara: "+resta);
     System.out.println("Su producto Resultara: "+producto);
     System.out.println("Su cociente Resultara: "+cociente);
     
    }
    







}
