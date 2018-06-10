package scanner.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import scanner.model.CompanyCategory;

@Component
public interface CompanyCategoryRepository extends JpaRepository<CompanyCategory, Long> {
	
//	public List<CompanyCategory> findByCompany(Company company);
//	
//	public List<CompanyCategory> findByCompanyCategory(CompanyCategory companyCategory);
}
