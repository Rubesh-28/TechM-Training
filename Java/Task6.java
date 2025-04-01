import java.util.HashMap;
import java.util.Scanner;

public class Task6 {
    public static void main(String[] args){
        Scanner sc =new Scanner(System.in);
        int total_sales=100;
        HashMap <String,Double> productprice=new HashMap<>();
        productprice.put("fruit", 10.0);
        productprice.put("Biscuits", 5.75);
        productprice.put("Oil", 20.50);

        while(true){
            System.out.println("!.Check Price 2.Calculate Sales Total 3.Convert Units 4.Exit");
            System.out.println("Enter Your Option");
            int value=sc.nextInt();
            switch (value) {
                case 1:
                    System.out.println(productprice);
                    break;
                case 2:
                    System.out.println(total_sales);
                case 3:
                    System.out.println("Enter the grams");
                    int grams=sc.nextInt();
                    System.out.println("Kg:"+grams/1000);
                    break;
                case 4:
                    System.out.println("Exiting... Thank you!");
                    return;
                default:
                    break;
            }
            sc.close();
        }
    }
}