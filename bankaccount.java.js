import java.util.Scanner;

public class BankAccount {
    private String accountNumber;
    private String password;
    private double balance;

    public BankAccount(String accountNumber, String password, double initialBalance) {
    this.accountNumber = accountNumber;
    this.password = password;
    this.balance = initialBalance;
}

public boolean authenticate(String enteredPassword) {
    return password.equals(enteredPassword);
}

public void deposit(double depositAmount) {
    balance += depositAmount;
    System.out.println("Bạn đã nạp vào " + depositAmount + " VND. Số dư hiện tại là: " + balance + " VND");
}

public void withdraw(double withdrawAmount) {
    if (balance >= withdrawAmount) {
        balance -= withdrawAmount;
        System.out.println("Bạn đã rút " + withdrawAmount + " VND. Số dư hiện tại là: " + balance + " VND");
    } else {
        System.out.println("Số dư không đủ.");
    }
}

public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Nhap so tai khoan: ");
    String accountNumber = scanner.nextLine();

    System.out.print("Nhap mat khau: ");
    String password = scanner.nextLine();

    System.out.print("Nhap so du ban dau: ");
    double initialBalance = scanner.nextDouble();

    BankAccount atm = new BankAccount(accountNumber, password, initialBalance);

    System.out.println("Dang nhap thanh cong!");

    while (true) {
        System.out.println("\n===== Menu =====");
        System.out.println("1. Nap tien");
        System.out.println("2. Rut tien");
        System.out.println("3. Thoat");

        System.out.print("Chon thao tac (1-3): ");
        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                System.out.print("Nhap so tien muon nap: ");
                double depositAmount = scanner.nextDouble();
                atm.deposit(depositAmount);
                break;

            case 2:
                System.out.print("Nhap so tien muon rut: ");
                double withdrawAmount = scanner.nextDouble();
                atm.withdraw(withdrawAmount);
                break;

            case 3:
                System.out.println("Cam on ban da su dung dich vu. Tam biet!");
                System.exit(0);
                break;

            default:
                System.out.println("Lua chon khong hop le. Vui long chon lai.");
        }
    }
}
}