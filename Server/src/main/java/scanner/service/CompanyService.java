package scanner.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import scanner.model.Company;
import scanner.repository.CompanyRepository;


@Component
public class CompanyService {
	@Autowired
	CompanyRepository companyRepository;
	
	public Optional<Company> findByName(String name) {
		return companyRepository.findByName(name);
	}
	
	public List<Company> findByNameContains(String name) {
		return companyRepository.findByNameContains(name);
	}
	
	public List<Company> findAll() {
		return companyRepository.findAll();
	}
	
	public Page<Company> findAll(Pageable page) {
		return companyRepository.findAll(page);
	}

	public Company findOne(Long id) {
		return companyRepository.findOne(id);
	}

	public Company save(Company company) {
		return companyRepository.save(company);
	}

	public void remove(Long id) {
		 companyRepository.delete(id);
	}
}
