package scanner.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import scanner.model.Category;

public class CategoryDTO {

	@Id
	@GeneratedValue
	private Long id;

	private String name;

//	private CompanyCategoryDTO companyCategories;

	public CategoryDTO() {

	}
	
	public CategoryDTO(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
//		this.companyCategories = companyCategories;
	}

	public CategoryDTO(Category category) {
		this.id = category.getId();
		this.name = category.getName();
//		this.companyCategories = new CompanyCategoryDTO((CompanyCategory) category.getCompanyCategory());
		} 

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "CategoryDTO [id=" + id + ", name=" + name + "]";
	}

//	public CompanyCategoryDTO getCompanyCategories() {
//		return companyCategories;
//	}
//
//	public void setCompanyCategories(CompanyCategoryDTO companyCategories) {
//		this.companyCategories = companyCategories;
//	}


}
