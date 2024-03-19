package EjerciciosLaboIII.HackerRanks.Java;
import java.io.*;



public class JavaLoops {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(bufferedReader.readLine().trim());
        
        if(2<=N && N<=20){
            int mult=1;
           for (int i = 1; i <= 10; i++){
             System.out.println(N +" X "+mult+" = "+N*mult);
             mult++;
           }
        }
        
        
        
        
        

        bufferedReader.close();
    }
}


