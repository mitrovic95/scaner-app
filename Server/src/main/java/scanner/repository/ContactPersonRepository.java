package scanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import scanner.model.ContactPerson;

@Component
public interface ContactPersonRepository extends JpaRepository<ContactPerson, Long> {

}
