import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthenticationService } from '../service/authentication-service.service';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  public user;

  public wrongUsernameOrPass: boolean;

  public logIn = false;
  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    this.user = {};
    this.wrongUsernameOrPass = false;
   }

  ngOnInit() {
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  compareMedia(): void {
    if (window.matchMedia('(max-width: 700px)').matches) {
      this.router.navigate(['media-stream-barcode']);
    }
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

  login(): void {
    // if (window.matchMedia('(max-width: 700px)').matches) {
    //   this.router.navigate(['company-page']);
    // }
    this.authenticationService.login(this.user.username, this.user.password).subscribe(
      (loggedIn: boolean) => {
        if (loggedIn) {
          this.router.navigate(['/main']);
        }
      }
    ,
    (err: Error) => {
      if (err.toString() === 'Ilegal login') {
        this.wrongUsernameOrPass = true;
        console.log(err);
      }else {
        Observable.throw(err);
      }
    });
  }
}
