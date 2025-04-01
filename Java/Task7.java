import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

public class Task7 {
    public static int divide(int a, int b) {
        try {
            return a / b;
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero!");
            return 0;
        } finally {
            System.out.println("divisin completed.");
        }
    }

    public static void openFile(String path) throws IOException {
        File file = new File(path);
        if (!file.exists()) {
            throw new FileNotFoundException("File not found at " + path);
        }
        System.out.println("File opened: " + path);
    }

    public static void main(String[] args) {
        System.out.println("Result: " + divide(10, 2));
        System.out.println("Result: " + divide(10, 0));
        try {
            openFile("C:/Users/Rubesh/Downloads/Jenkins pass.txt");
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        try {
            openFile("C:/Users/Rubesh/Downloads/Jenkins.txt");
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}