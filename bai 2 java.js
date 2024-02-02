import java.util.Scanner;
public class Bai2 {
    public static void main(String[] args) {
    try (Scanner scanner = new Scanner(System.in)) {
    System.out.print("Nhap so nguyen duong n: ");
    int n = scanner.nextInt();

    int sum = calculateDigitSum(n);

    System.out.println("Tong cac chu so cua " + n + " la: " + sum);
}
}

/**
 * Tính tổng các chữ số của một số nguyên dương.
 *
 * @param num Số nguyên dương cần tính tổng chữ số.
 * @return Tổng các chữ số của số nguyên dương.
 */
public static int calculateDigitSum(int num) {
    int sum = 0;
    while (num != 0) {
        sum += num % 10;
        num /= 10;
    }
    return sum;
}
}