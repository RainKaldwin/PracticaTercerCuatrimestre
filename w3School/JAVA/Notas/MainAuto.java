package w3School.JAVA.Notas;
public class MainAuto {
    
    public void maximaVelocidad(){
        System.out.println("El auto esta llendo lo mas rapido posible");

    }

    public void velocidad(int maximaVelocidad){
        System.out.println("La velocidad maxima es:"+maximaVelocidad);

    }

    public static void main(String[] args) {
        MainAuto myAuto = new MainAuto();
        myAuto.maximaVelocidad();
        myAuto.velocidad(200);
    }





}
