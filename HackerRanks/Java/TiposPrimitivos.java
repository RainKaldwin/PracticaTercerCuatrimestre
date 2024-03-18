package HackerRanks.Java;
import java.util.*;

class TiposPrimitivos {
    public static void main(String[] argh) {

        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt();

        for (int i = 0; i < t; i++) {

            try {
                long x = sc.nextLong();
                System.out.println(x + " can be fitted in:");

                // Checking for byte range (-128 to 127)
                if (x >= Byte.MIN_VALUE && x <= Byte.MAX_VALUE)
                    System.out.println("* byte");

                // Checking for short range (-32768 to 32767)
                if (x >= Short.MIN_VALUE && x <= Short.MAX_VALUE)
                    System.out.println("* short");

                // Checking for int range (-2^31 to 2^31-1)
                if (x >= Integer.MIN_VALUE && x <= Integer.MAX_VALUE)
                    System.out.println("* int");

                // Checking for long range (-2^63 to 2^63-1)
                if (x >= Long.MIN_VALUE && x <= Long.MAX_VALUE)
                    System.out.println("* long");

            } catch (Exception e) {
                // If the number is too large or too small to fit in any primitive data type
                System.out.println(sc.next() + " can't be fitted anywhere.");
            }

           

        }

        sc.close();
    }
}

