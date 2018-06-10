package scanner.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Company {

	@Id
	@GeneratedValue
	private Long id;

	private String name;

	private String address;

	private int validLicenceTill;

	@OneToMany(mappedBy = "company", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<ContactPerson> contactPerson = new HashSet<>();

	@OneToMany(mappedBy = "company", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<CompanyCategory> companyCategory = new HashSet<>();

	public Company() {

	}

	public Company(Long id, String name, String address, int validLicenceTill, Set<ContactPerson> contactPerson,
			Set<CompanyCategory> companyCategory) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.validLicenceTill = validLicenceTill;
		this.contactPerson = contactPerson;
		this.companyCategory = companyCategory;
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

	public Set<ContactPerson> getContactPerson() {
		return contactPerson;
	}

	public void setContactPerson(Set<ContactPerson> contactPerson) {
		this.contactPerson = contactPerson;
	}

	public Set<CompanyCategory> getCompanyCategory() {
		return companyCategory;
	}

	public void setCompanyCategory(Set<CompanyCategory> companyCategory) {
		this.companyCategory = companyCategory;
	}

	@Override
	public String toString() {
		return "Company [id=" + id + ", name=" + name + ", address=" + address + ", validLicenceTill="
				+ validLicenceTill + ", contactPerson=" + contactPerson + ", companyCategory=" + companyCategory + "]";
	}

}
