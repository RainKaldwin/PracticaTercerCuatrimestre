package w3School.JAVA.Notas;
import java.util.Scanner;


public class expImp {
    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        System.out.println("Ingresar Usuario");

        String usuario = lector.nextLine();
        System.out.println("El usuario es: "+usuario);
    }
}
