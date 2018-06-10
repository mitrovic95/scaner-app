import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/page/user-page/user.service';
import { AuthenticationService } from 'app/service/authentication-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User;
  public id: number;
  public isDataAvailable: boolean;
  public change: boolean;

  constructor(private userService: UserService, private authenticationService: AuthenticationService,
     private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.change = false;
    this.loadData();
  }

  loadData() {
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  isLogin() {
    return this.authenticationService.getCurrentUser();
  }

  edit(user) {
    this.change = true;
  }

  delete(user: User) {
    this.userService.deleteUser(user)
    .subscribe((data) => {
       this.loadData();
      }
    )
   this.loadData();
  }

  save(user: User) {
    this.userService.saveUser(user)
    .subscribe(
      (data) => {
          this.loadData();
        }
      )
  }

}
