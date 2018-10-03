import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// tslint:disable-next-line:import-spacing
import { AuthenticationService } from  'app/service/authentication-service.service';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {

  public user;

  public wrongUsernameOrPass: boolean;

  public logIn = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.user = {};
    this.wrongUsernameOrPass = false;
  }

  ngOnInit() {
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
   return this.authenticationService.isLoggedIn();
  }

  // loginRoute(): void {
  //   this.authenticationService.isLoggedIn();
  //   this.router.navigate(['/main']);
  // }

  toggleLogIn(): void {
    this.logIn = !this.logIn;
  }

  isAdmin(): boolean {
    return this.authenticationService.isAdmin();
  }

  isCompanyAdmin(): boolean {
    return this.authenticationService.isCompanyAdmin();
  }

  login(): void {
    this.authenticationService.login(this.user.username, this.user.password).subscribe(
      (loggedIn: boolean) => {
        if (loggedIn) {
          this.router.navigate(['']);
        }
      }
    ,
    (err: Error) => {
      if (err.toString() === 'Ilegal login') {
        this.wrongUsernameOrPass = true;
        console.log(err);
      } else {
        Observable.throw(err);
      }
    });
  }
}
