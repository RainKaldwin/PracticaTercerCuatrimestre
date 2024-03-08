package w3School.JAVA.Notas;
public class Main6 {
    
    public static void main(String[] args) {
        myMethod();
        nombreCompleto("Rain Kaldwin",21);
        nombreCompleto("Rocio Morales",25);
        nombreCompleto("Agustin Nieto",25);

        System.out.println("Respuesta sumador: "+sumador(15, 5));
    }



    //metodos
    static void myMethod(){
        System.out.println("se ejecuto el metodo");
    }
   
    static void nombreCompleto(String fname,int edad){
        System.out.println("El nombre completo es:"+" "+fname+" Tiene "+edad+" Anios");
    }

    static int sumador(int num1,int num2){
        int aux = 0;
        aux = num1-num2;
        return aux;
    }
}
