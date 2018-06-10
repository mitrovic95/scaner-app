package scanner.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import scanner.model.Company;

@Component
public interface CompanyRepository extends JpaRepository<Company, Long> {
	Optional<Company> findByName(String name);
	List<Company> findByNameContains(String name);
}
