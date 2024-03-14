package HackerRanks.Java;

import java.util.Scanner;

public class FormatoImput {
        /*
            System.out.printf(format, arguments);

            s formats strings.
            d formats decimal integers.
            f formats floating-point numbers.
            t formats date/time values.
         
            The [flags] define standard ways to modify the output and are most common
            for formatting integers and floating-point numbers.

           The [width] specifies the field width for outputting the argument.
           It represents the minimum number of characters written to the output.

           The [.precision] specifies the number of digits of precision when outputting floating-point values.
           Additionally, we can use it to define the length of a substring to extract from a String.
         */
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("================================");
        for(int i=0;i<3;i++){
            String s1=sc.next();
            int x=sc.nextInt();
            
            System.out.printf("%-15s",s1);
            String pars = String.format("%03d", x);
            System.out.println(pars);
        }
        sc.close();
        System.out.println("================================");

    }
}

