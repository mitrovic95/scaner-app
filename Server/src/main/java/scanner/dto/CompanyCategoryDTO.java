package scanner.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import scanner.model.CompanyCategory;

public class CompanyCategoryDTO {

	@Id
	@GeneratedValue
	private Long id;

	private CompanyDTO company;

	private CategoryDTO category;

	public CompanyCategoryDTO(Long id, CompanyDTO company, CategoryDTO category) {
		super();
		this.id = id;
		this.company = company;
		this.category = category;
	}

	public CompanyCategoryDTO(CompanyCategory companyCategory) {
		this.id = companyCategory.getId();
		this.company = new CompanyDTO(companyCategory.getCompany());
		this.category = new CategoryDTO(companyCategory.getCategory());
	}

	public CompanyCategoryDTO() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public CompanyDTO getCompany() {
		return company;
	}

	public void setCompany(CompanyDTO company) {
		this.company = company;
	}

	public CategoryDTO getCategory() {
		return category;
	}

	public void setCategory(CategoryDTO category) {
		this.category = category;
	}
	
	@Override
	public String toString() {
		return "CompanyCategoryDTO [id=" + id + ", company=" + company + ", category=" + category + "]";
	}

}
