import java.util.*;
import java.util.stream.Collectors;

class Employee {
    private String name;
    private double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }
    public String toString() {
        return name + " ($" + salary + ")";
    }
}

public class Task11 {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee("Sara", 70000),
            new Employee("Ali", 50000),
            new Employee("Khan", 120000));

        double salaryThreshold = 60000;

        List<String> highSalaryEmployees = employees.stream()
            .filter(emp -> emp.getSalary() > salaryThreshold) 
            .map(emp -> emp.getName().toUpperCase())          
            .collect(Collectors.toList());                    
        System.out.println("Original Employee List:");
        employees.forEach(System.out::println);

        System.out.println("\n  High Salary Employees (Names in Uppercase):");
        highSalaryEmployees.forEach(System.out::println);
    }
}

