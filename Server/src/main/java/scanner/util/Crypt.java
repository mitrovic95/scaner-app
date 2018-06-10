package scanner.util;

import org.springframework.security.crypto.bcrypt.BCrypt;

public class Crypt {

	private static int workload = 12;

	public static String hashPassword(String password_plaintext) {
		String salt = BCrypt.gensalt(workload);
		String hashed_password = BCrypt.hashpw(password_plaintext, salt);
		return (hashed_password);
	}
}
