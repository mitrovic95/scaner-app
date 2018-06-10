package scanner.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import scanner.model.ContactPerson;

public class ContactPersonDTO {

	@Id
	@GeneratedValue
	private Long id;

	private String firstName;

	private String lastName;

	private String email;

	private int phoneNumber;

	private CompanyDTO company;

	public ContactPersonDTO(Long id, String firstName, String lastName, String email, int phoneNumber,
			CompanyDTO company) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.company = company;
	}

	public ContactPersonDTO(ContactPerson contactPerson) {
		this.id = contactPerson.getId();
		this.firstName = contactPerson.getFirstName();
		this.lastName = contactPerson.getLastName();
		this.email = contactPerson.getEmail();
		this.phoneNumber = contactPerson.getPhoneNumber();
		this.company = new CompanyDTO(contactPerson.getCompany());
	}

	public ContactPersonDTO() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public CompanyDTO getCompanies() {
		return company;
	}

	public void setCompanies(CompanyDTO company) {
		this.company = company;
	}

	@Override
	public String toString() {
		return "ContactPersonDTO [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", phoneNumber=" + phoneNumber + ", company=" + company + "]";
	}

}
