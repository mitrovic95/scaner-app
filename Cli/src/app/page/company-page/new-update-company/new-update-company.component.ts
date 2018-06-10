import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from 'app/model/company';
import { CompanyService } from 'app/page/company-page/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'app/service/authentication-service.service';

@Component({
  selector: 'app-new-update-company',
  templateUrl: './new-update-company.component.html',
  styleUrls: ['./new-update-company.component.css']
})
export class NewUpdateCompanyComponent implements OnInit {

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
    this.route.params
    .subscribe(
      (params) => {
        this.isDataAvailable = false;
        this.id = +params['id'];
        console.log('ID', this.id);
      }
    )
    this.companyService.getCompany(this.id)
    .subscribe(
      (data) => {
        console.log('DATA', data);
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

  edit(companies: Company) {
    this.forEdit = companies;
    this.change = true;
  }
}
