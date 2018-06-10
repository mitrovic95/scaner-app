package scanner.dto;

import javax.persistence.*;

import scanner.model.Role;
import scanner.model.SecurityUser;

public class SecurityUserDTO {

    @Id
    @GeneratedValue
    private Long id;

    private String username;

    private Role role;

    private String firstName;

    private String lastName;

    public  SecurityUserDTO() {
    	
    }
    
    public SecurityUserDTO(Long id, String username, Role role, String firstName, String lastName) {
		super();
		this.id = id;
		this.username = username;
		this.role = role;
		this.firstName = firstName;
		this.lastName = lastName;
	}
    
    public SecurityUserDTO(SecurityUser securityUser) {
        this.id = securityUser.getId();
        this.username = securityUser.getUsername();
		this.role = securityUser.getRole();
		this.firstName = securityUser.getFirstName();
		this.lastName = securityUser.getLastName();
    }
    
    
	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
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
}
