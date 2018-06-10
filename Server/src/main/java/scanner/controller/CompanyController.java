package scanner.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import scanner.dto.CompanyDTO;
import scanner.model.Company;
import scanner.service.CompanyService;

@RestController
public class CompanyController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	private CompanyService companyService;

    @PreAuthorize("isAuthenticated()")
	@GetMapping(value = "api/company")
	public ResponseEntity<List<CompanyDTO>> getCompanyPage() {
		final List<CompanyDTO> retVal = companyService.findAll().stream().map(CompanyDTO::new)
				.collect(Collectors.toList());

		return new ResponseEntity<>(retVal, HttpStatus.OK);
	}

    @PreAuthorize("isAuthenticated()")
	  @GetMapping(value = "api/company" , params = {"name"})
	    public ResponseEntity<List<CompanyDTO>> getCompaniesByName(@RequestParam String name) {
	        final List<CompanyDTO> retVal = companyService.findByNameContains(name).stream()
	                .map(CompanyDTO::new)
	                .collect(Collectors.toList());

	        return new ResponseEntity<>(retVal, HttpStatus.OK);
	    }

	@PreAuthorize("isAuthenticated()")
	@GetMapping(value = "api/company/{id}")
	public ResponseEntity<CompanyDTO> getCompany(@PathVariable Long id) {
		final Company company = companyService.findOne(id);

		if (company == null) {
			return new ResponseEntity<CompanyDTO>(HttpStatus.NOT_FOUND);
		}

		final CompanyDTO companyDTO = new CompanyDTO(company);
		return new ResponseEntity<>(companyDTO, HttpStatus.OK);
	}

	@PreAuthorize("hasAnyAuthority('SuperAdmin')")
	@PostMapping(value = "/api/company")
	public ResponseEntity<String> registerNewCompany(@RequestBody Company company) {
		final Optional<Company> checkCompany = companyService.findByName(company.getName());
		if (checkCompany.isPresent()) {
			return new ResponseEntity<>("Company already used", HttpStatus.BAD_REQUEST);
		} else if (company.getName() == null) {
			return new ResponseEntity<>("Company is null", HttpStatus.BAD_REQUEST);
		}
		companyService.save(company);
		return new ResponseEntity<>("Company created", HttpStatus.CREATED);
	}

	@PreAuthorize("hasAnyAuthority('SuperAdmin')")
	@PutMapping(value = "/api/company/{id}")
	public ResponseEntity<String> updateCompany(@PathVariable Long id, @RequestBody Company company) {
		final Company foundCompany = companyService.findOne(id);
		if (foundCompany == null) {
			return new ResponseEntity<>("Not found", HttpStatus.NOT_FOUND);
		}
		foundCompany.setName(company.getName());
		foundCompany.setAddress(company.getAddress());
		foundCompany.setValidLicenceTill(company.getValidLicenceTill());
		foundCompany.setCompanyCategory(company.getCompanyCategory());
		foundCompany.setContactPerson(company.getContactPerson());
		companyService.save(foundCompany);
		return new ResponseEntity<>("Company updated successfully", HttpStatus.OK);

	}

	@PreAuthorize("hasAnyAuthority('SuperAdmin')")
	@DeleteMapping(value = "/api/company/{id}")
	public ResponseEntity<String> deleteCompany(@PathVariable Long id) {
		final Company foundCompany = companyService.findOne(id);
		if (foundCompany == null) {
			return new ResponseEntity<>("Not found", HttpStatus.NOT_FOUND);
		}
		companyService.remove(id);
		return new ResponseEntity<>("OK", HttpStatus.OK);
	}

}
