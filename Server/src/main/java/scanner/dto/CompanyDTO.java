package scanner.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import scanner.model.Company;

public class CompanyDTO {

	@Id
	@GeneratedValue
	private Long id;

	private String name;

	private String address;

	private int validLicenceTill;
//
//	private ContactPersonDTO contactPerson;
//
//	private CompanyCategoryDTO companyCategory;

//	public CompanyDTO(Long id, String name, String address, int validLicenceTill, ContactPersonDTO contactPerson,
//			CompanyCategoryDTO companyCategory) {
//		super();
//		this.id = id;
//		this.name = name;
//		this.address = address;
//		this.validLicenceTill = validLicenceTill;
//		this.contactPerson = contactPerson;
//		this.companyCategory = companyCategory;
//	}
	
	

	public CompanyDTO(Company company) {
		this.id = company.getId();
		this.name = company.getName();
		this.address = company.getAddress();
		this.validLicenceTill = company.getValidLicenceTill();
//		this.contactPerson = new ContactPersonDTO((ContactPerson) company.getContactPerson());
//		this.companyCategory = new CompanyCategoryDTO((CompanyCategory) company.getCompanyCategory());
	}

	public CompanyDTO(Long id, String name, String address, int validLicenceTill) {
	super();
	this.id = id;
	this.name = name;
	this.address = address;
	this.validLicenceTill = validLicenceTill;
}

	public CompanyDTO() {

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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getValidLicenceTill() {
		return validLicenceTill;
	}

	public void setValidLicenceTill(int validLicenceTill) {
		this.validLicenceTill = validLicenceTill;
	}

	@Override
	public String toString() {
		return "CompanyDTO [id=" + id + ", name=" + name + ", address=" + address + ", validLicenceTill="
				+ validLicenceTill + "]";
	}

//	public ContactPersonDTO getContactPerson() {
//		return contactPerson;
//	}
//
//	public void setContactPerson(ContactPersonDTO contactPerson) {
//		this.contactPerson = contactPerson;
//	}
//
//	public CompanyCategoryDTO getCompanyCategory() {
//		return companyCategory;
//	}
//
//	public void setCompanyCategory(CompanyCategoryDTO companyCategory) {
//		this.companyCategory = companyCategory;
//	}

//	@Override
//	public String toString() {
//		return "CompanyDTO [id=" + id + ", name=" + name + ", address=" + address + ", validLicenceTill="
//				+ validLicenceTill + ", contactPerson=" + contactPerson + ", companyCategory=" + companyCategory
//				+ "]";
//	}
	
	

}
