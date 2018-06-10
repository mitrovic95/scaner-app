package scanner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import scanner.model.ContactPerson;
import scanner.repository.ContactPersonRepository;

@Component
public class ContactPersonService {
	@Autowired
	ContactPersonRepository contactPersonRepository;
	
	public List<ContactPerson> findAll() {
		return contactPersonRepository.findAll();
	}
	
	public Page<ContactPerson> findAll(Pageable page) {
		return contactPersonRepository.findAll(page);
	}

	public ContactPerson findOne(Long id) {
		return contactPersonRepository.findOne(id);
	}

	public ContactPerson save(ContactPerson contactPerson) {
		return contactPersonRepository.save(contactPerson);
	}

	public void remove(Long id) {
		contactPersonRepository.delete(id);
	}
}
