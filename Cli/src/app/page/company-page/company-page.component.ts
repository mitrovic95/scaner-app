import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/service/authentication-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from 'app/model/company';
import { CompanyService } from 'app/page/company-page/company.service';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {

  public companies: Company[];
  public id?: number;
  public company: Company;
  public isDataAvailable: boolean;
  public companyForChange: Company;
  public change: boolean;
  public ukljuciPretrazivac: boolean;
  public name: string;


    constructor(private companyService: CompanyService, private authenticationService: AuthenticationService,
     private router: Router, private route: ActivatedRoute) {}

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  ngOnInit() {
    this.name = '';
    this.change = false;
    this.ukljuciPretrazivac = false;
    this.loadData();

    this.companyForChange = {
      name: null,
      address: null,
      validLicenceTill: null
    }
  }

  reset() {
    this.loadData();
    this.change = false;
  }

  edit(company) {
    this.companyForChange = company;
    this.change = true;
    console.log(this.companyForChange);
  }

  delete(company: Company) {
    console.log('KLIK', company);
    this.companyService.deleteCompany(company)
    .subscribe(
      (data) => {
        this.loadData();
       },
       (error) => {
        this.loadData();
       }
      )
  }

  loadData() {
    this.companyService.getCompanies()
    .subscribe(
      (data) => {
        this.companies = data;
      }
    )
      this.route.params
      .subscribe(
        (params) => {
          this.isDataAvailable = false;
          this.id = +params['id'];
        }
      )
      this.companyService.getCompany(this.id)
      .subscribe(
        (data) => {
          this.company = data;
          this.isDataAvailable = true;
        }
      );
    };


  save(company: Company) {
    this.companyService.saveCompany(company)
    .subscribe(
      (data) => {
          this.loadData();
        }
      )
  }

  findByName(name: string) {
    this.companyService.getCompanyByName(this.name).subscribe(
      (data) => {
        this.companies = data;
        this.ukljuciPretrazivac = true;
      }
    )
}

  resetFilter() {
    this.companyService.getCompanyByName('').subscribe(
      (data) => {
        this.companies = data;
        this.ukljuciPretrazivac = true;
      }
    )
  }
}
