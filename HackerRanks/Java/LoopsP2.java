package HackerRanks.Java;
import java.util.Scanner;

class LoopsP2{
    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
            
            for(int x=0;x<n;x++)
            {
               int result = a;
                
               for (int j = 0; j <= x; j++) {
                   result += Math.pow(2, j) * b;
               }
                System.out.printf("%d ", result); 
               
            }
            
           System.out.print("\n");
        }
        in.close();
    }
}