package scanner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import scanner.model.CompanyCategory;
import scanner.repository.CompanyCategoryRepository;

@Component
public class CompanyCategoryService {
	@Autowired
	CompanyCategoryRepository companyCategoryRepository;
	
	public List<CompanyCategory> findAll() {
		return companyCategoryRepository.findAll();
	}
	
	public Page<CompanyCategory> findAll(Pageable page) {
		return companyCategoryRepository.findAll(page);
	}

	public CompanyCategory findOne(Long id) {
		return companyCategoryRepository.findOne(id);
	}

	public CompanyCategory save(CompanyCategory companyCategory) {
		return companyCategoryRepository.save(companyCategory);
	}

	public void remove(Long id) {
		companyCategoryRepository.delete(id);
	}
}
