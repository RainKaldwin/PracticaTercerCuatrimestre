package w3School.JAVA.Notas;
public class Main4 {
    public static void main(String[] args) {
        

        //while loop
        int i = 0;

        while (i<5) {
            System.out.println(i);
            i++;
        }

        //do while

        int x = 0;

        do {
            System.out.println(x);
            x++;    
        } while (x<5);

        //for

        for(int f=0;f<=10;f++){
            System.out.println(f);
        }

        //nested loops

        for(int q=0;q<=2;q++)
        {
            System.out.println("outer:"+q);

            for(int j=1;j<=3;j++)
            {
                System.out.println("inner:"+j);
            }
        }

        //foreach

        String [] cars={"Volvo","BMW","Ford","Mazda"};
      
        for (String car : cars) {
            System.out.println(car);
        }
        
        //break y for loops

        for(int p=0;p<10;p++){
            if (p==4) {
                break;
                
            }
            System.out.println(p);
        }

        //continue

        //break y for loops

        for(int p=0;p<10;p++){
            if (p==4) {
                continue;
                
            }
            System.out.println(p);
        }
    }
}
