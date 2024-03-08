package w3School.JAVA.Notas;
public class GetYset {
    private String nombre;

    //getter
    public String getName()
    {
        return nombre;
    }

    //setter

    public void setName(String nuevoNombre){
        this.nombre=nuevoNombre;
    }


    public static void main(String[] args) {
        GetYset oSetGet = new GetYset();
        oSetGet.setName("Rain");
        System.out.println(oSetGet.getName());
    }
}
