import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Company } from 'app/model/company';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'app/page/company-page/company.service';
import { AuthenticationService } from 'app/service/authentication-service.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {

  @Input()
  change: boolean;

  @Output()
  postCompany: EventEmitter<Company> = new EventEmitter();

  public forEdit: Company;
  public company: Company;
  public id: number;
  public isDataAvailable: boolean;

 constructor(private companyService: CompanyService,  private router: Router,
   private route: ActivatedRoute,  private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.load();
    this.loadData();

   this.forEdit = {
      id: null,
      name: null,
      address: null,
      validLicenceTill: null
    };
  }

  load() {
    this.company = {
      name: null,
      address: null,
      validLicenceTill: null
    }
  }

  reset() {
    this.load();
    this.change = false;
  }

  send() {
    this.postCompany.next(this.company);
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
  loadData() {

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
