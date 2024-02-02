import java.util.Scanner;
public class Bai1 {
    public static void main(String[] args) {
    try (Scanner scanner = new Scanner(System.in)) {
    System.out.print("Nhap so  nguyen duong n: ");
    int n = scanner.nextInt();

    System.out.println("Cac so nguyen to nho hon " + n + " la:");
    printPrimeNumbers(n);
}
}

public static boolean isPrime(int num) {
    if (num < 2) {
        return false;
    }
    for (int i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

public static void printPrimeNumbers(int n) {
    for (int i = 2; i < n; i++) {
        if (isPrime(i)) {
            System.out.print(i + " ");
        }
    }
}
}