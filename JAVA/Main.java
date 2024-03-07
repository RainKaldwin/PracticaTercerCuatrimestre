package JAVA;
public class Main{
    public static void main (String[]ars){
        //podemos escribir strings con ""
        System.out.println("Hello World");
        System.out.println("I am learning java");
        System.out.println("Its awesome!");
        //numeros sin ""
        System.out.println(15042002);
        //operaciones matematicas y concatenar
        System.out.println("operation"+" = "+ 16*2);

        //variables en JAVA
        String nombre ="Rain";
        System.out.println(nombre);

        int numero = 15;
        System.out.println("El numero es"+" = "+numero);

        //parabra reservada final para hacer que no se puedan override

        final int resultado = 100;

        //imprimir variables

        String nombrePersona = "Rain";
        String apellido="Kaldwin";

        String nombreCompleto= nombrePersona+apellido;

        System.out.println(nombreCompleto);

        //variables matematicas

        int x=5, y=6, z=50;

        System.out.println(x+y+z);

        int x1,y1,z1;
        x1=y1=z1=50;

        System.out.println(x1+y1+z1);

        //variables decimales
        
        float decimal=5.23f;
        double myNum = 19.99d;

        //caracteres CON ''

        char mygrade='N';
        //es lo mismo que hacer
        char mygrade2=78; //ASCII

    }

    
    
}