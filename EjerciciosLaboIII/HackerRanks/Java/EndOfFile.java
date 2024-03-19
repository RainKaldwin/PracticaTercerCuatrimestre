package EjerciciosLaboIII.HackerRanks.Java;
import java.util.Scanner;

public class EndOfFile {
    public static void main(String[] args) {
        try {
            // Create a Scanner instance to read from stdin
            Scanner scanner = new Scanner(System.in);
            int lineNumber = 1; // Initialize line number counter
            // Iterate through all lines until EOF is reached
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine(); // Read the entire line
                
                System.out.println(lineNumber + " " + line);
                lineNumber++; // Increment line number
            }
            scanner.close();

            // Close the scanner (not necessary for System.in)
            // scanner.close();
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
