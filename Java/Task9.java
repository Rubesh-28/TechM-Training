import java.util.*;
public class Task9 {
    public static void main(String[] args) {
        ArrayList<String> products = new ArrayList<>();
        products.add("Laptop");
        products.add("Mouse");
        products.add("Keyboard");
        products.add("Monitor");
        products.add("Mouse"); 
        products.add("Laptop"); 
        products.add("Headphones");
        System.out.println(products);
        HashSet<String> uniqueProducts = new HashSet<>(products);
        System.out.println(uniqueProducts);
        uniqueProducts.remove("Mouse");
        System.out.println( uniqueProducts);

    }}