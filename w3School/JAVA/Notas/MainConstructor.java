package w3School.JAVA.Notas;
public class MainConstructor {
    int x;


    public MainConstructor(int y)
    {
        x=y;
    }

    public MainConstructor(){
        x=5;
    }

    public static void main(String[] args) {
        MainConstructor oMain=new MainConstructor();
        System.out.println(oMain.x);
        System.out.println(20);
    }
}
