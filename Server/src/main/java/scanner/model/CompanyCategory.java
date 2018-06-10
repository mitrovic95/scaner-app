package scanner.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class CompanyCategory {

	@Id
	@GeneratedValue
	private Long id;

	@ManyToOne(fetch = FetchType.EAGER)
	Company company;

	@ManyToOne(fetch = FetchType.EAGER)
	Category category;

	public CompanyCategory(Long id, Company company, Category category) {
		super();
		this.id = id;
		this.company = company;
		this.category = category;
	}

	public CompanyCategory() {

	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "CompanyCategory [id=" + id + ", company=" + company + ", category=" + category + "]";
	}

}
