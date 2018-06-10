import { Component, OnInit } from '@angular/core';
import { Company } from 'app/model/company';
import { CompanyService } from 'app/page/company-page/company.service';
import { AuthenticationService } from 'app/service/authentication-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public company: Company;
  public id?: number;
  public isDataAvailable: boolean;
  public change: boolean;

    constructor(private companyService: CompanyService, private authenticationService: AuthenticationService,
     private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.change = false;
    this.loadData();
  }

  loadData() {
  }

  isLogin() {
    return this.authenticationService.getCurrentUser();
  }

  edit(company) {
    this.change = true;
  }

  delete(company: Company) {
    this.companyService.deleteCompany(company)
    .subscribe(() => { this.loadData(); });
   this.loadData();
  }

  save(company: Company) {
    this.companyService.saveCompany(company)
    .subscribe(
      (data) => {
          this.loadData();
        }
      )
  }

}
