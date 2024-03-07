package JAVA;
public class Main5 {
    
    public static void main(String[] args) {
        
        //arrays

        String [] animales ={"Perro","Gato","Loro","Hamster"};
        System.out.println(animales[3]);

        System.out.println(animales.length);

        //for y arrays

        String [] mascotas={"Clarita","Negra","Canoso","Amarillo","Rocko","Morena"};

        for(int i=0;i<mascotas.length;i++){
            System.out.println(mascotas[i]);
        }
        
        //foreach y array

        String [] electrodomesticos = {"Heladera","Horno","Licuadora","Microondas"};
        for(String i : electrodomesticos){
            System.out.println(i);
        }

        //Multidimensional Arrays

        int [][] misNumeros ={{1,2,3,4,5},{5,6,7,8}};

        System.out.println(misNumeros[1][2]);

    }   
}
