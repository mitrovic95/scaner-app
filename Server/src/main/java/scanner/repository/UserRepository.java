package scanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import scanner.model.SecurityUser;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<SecurityUser, Long> {

//	List<SecurityUser> findByFirstNameContainsOrUsernameContains (String firstName, String username);
	List<SecurityUser> findByUsernameContains (String username);
    Optional<SecurityUser> findByUsername(String username);
//	Optional<SecurityUser> findByEmail(String email);

}