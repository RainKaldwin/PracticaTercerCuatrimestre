package JAVA;
public class Main2 {
    public static void main(String []args)
    {

        System.out.println("Widening Casting");
        int myInt=9;
        double myDouble= myInt; // Automatic casting: int to double


        System.out.println(myInt);
        System.out.println(myDouble);

        System.out.println("Narrowing Casting");

        double myDouble1 = 9.78d;
        int myInt1 = (int) myDouble; // Manual casting: double to int

        System.out.println(myDouble1);   // Outputs 9.78
        System.out.println(myInt1);      // Outputs 9

        //STRING LENGTH

        String txt="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        System.out.println("The length of the txt is:"+txt.length());

        //Metodos de string
        System.out.println(txt.toLowerCase());

        //la clase Math
        Math.max(102,345);
        Math.min(234,431);
        Math.abs(-32.1);
        Math.random();

        //controlar el numero random
        int randonNum = (int)(Math.random()*101);//entre 0 y 100
        System.out.println(randonNum);

    }

}
