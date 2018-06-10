import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public logIn = false;
  constructor(private authenticationService: AuthenticationService,
    private router: Router) {
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

  toggleLogIn(): void {
    this.logIn = !this.logIn;
  }

  isAdmin(): boolean {
    return this.authenticationService.isAdmin();
  }
}
