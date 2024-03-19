package EjerciciosLaboIII.EjerciciosDeClase.U1.Tarea3;


public class Carrito{
    String nombre;
    double pre_Unitario;
    int cantidad;
    double total;

    //constructor
    Carrito(String oNombre,double oPre,int oCantidad,double oTotal){
        nombre=oNombre;
        pre_Unitario=oPre;
        cantidad=oCantidad;
        total=oTotal;
    }

    public void MostrarCarrito(){
        System.out.println("Factura!");
        System.out.println("Nombre: " + nombre);
        System.out.println("Precio Unitario: " + pre_Unitario);
        System.out.println("Cantidad: " + cantidad);
        System.out.println("Total: " + total);
        System.out.println();
    }


}


