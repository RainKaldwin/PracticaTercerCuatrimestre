package w3School.JAVA.Notas;
import java.time.LocalDate;//Paquete de manejo de fechas
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ManejoFecha {
    public static void main(String[] args) {
        LocalDate oDate = LocalDate.now();
        System.out.println(oDate);

        LocalTime oTiempo = LocalTime.now();
        System.out.println(oTiempo);

        LocalDateTime oDT =LocalDateTime.now();
        System.out.println(oDT);

        DateTimeFormatter oFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        String formattedDate = oDT.format(oFormatter);
        System.out.println("Con formato:  "+formattedDate);
    }
}
