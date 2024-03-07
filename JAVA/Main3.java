package JAVA;
public class Main3 {
    public static void main(String[] args) {
        
        //if
        int myAge=21;
        int votingAge=16;

        if (myAge>=votingAge) {
            System.out.println("Puede votar!");

        }
        else
        {
            System.out.println("No puede votar!");

        }

        //version corta

        int number = 40;
        String respuesta = (number>100) ? "verdadero":"falso";
        System.out.println(respuesta);

        //swich

        int day = 1;
        
        switch (day) {
            case 1:
            System.err.println("Lunes");
            break;
            case 2:
            System.out.println("Martes");
            break;
            case 3:
            System.out.println("Miercoles");
            break;
            case 4:
            System.out.println("Jueves");
            break;
            case 5:
            System.out.println("Viernes");
            break;
            case 6:
            System.out.println("Sabado");
            break;
            case 7:
            System.out.println("Domingo");

                
                break;
        
            default:
                System.out.println("No se encontro");
        }

    }
}
