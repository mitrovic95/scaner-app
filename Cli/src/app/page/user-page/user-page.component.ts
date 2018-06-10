import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from 'app/service/authentication-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'app/page/user-page/user.service';
import { User } from 'app/model/user';
import { Page } from 'app/model/page';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public user: User;
  public users: User[];
  public id: number;
  public isDataAvailable: boolean;
  public userForChange: User;
  public change: boolean;
  public username: string;
  public ukljuciPretrazivac: boolean;


  constructor(private userService: UserService, private authenticationService: AuthenticationService,
     private router: Router, private route: ActivatedRoute, public toastr: ToastsManager,
     vcr: ViewContainerRef
) {
this.toastr.setRootViewContainerRef(vcr);
}

showSuccess() {
  this.toastr.success('You successfully created new user');
}

showError() {
  this.toastr.error('This is not good!', 'Oops!');
}

showWarning() {
  this.toastr.warning('You are being warned.', 'Alert!');
}

showInfo() {
  this.toastr.info('Just some information for you.');
}

showCustom() {
  this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
}

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
  ngOnInit() {
    this.username = '';
    this.change = false;
    this.ukljuciPretrazivac = false;
    this.loadData();

    this.userForChange = {
        username: null,
        role: null,
        firstName: null,
        lastName: null
    }
  }

  reset() {
    this.loadData();
    this.change = false;
  }

  edit(user) {
    this.userForChange = user;
    this.change = true;
    console.log(this.userForChange);
  }

  delete(user: User) {
    this.userService.deleteUser(user)
    .subscribe(
      (data) => {
         this.loadData();
        }
      )
      this.toastr.custom('<span style="color: red">You removed user.</span>', null,  {enableHTML: true});
      this.loadData();
  }

  loadData() {
    this.userService.getUsers()
    .subscribe(
      (data) => {
        this.users = data;
      }
    )
    this.route.params
    .subscribe(
      (params) => {
        this.isDataAvailable = false;
        this.id = +params['id'];
        // console.log('ID', this.id);
      }
    )
    this.userService.getUser(this.id)
    .subscribe(
      (data) => {
        // console.log('DATA', data);
        this.user = data;
        this.isDataAvailable = true;
      }
    );
  }

  save(user: User) {
    this.userService.saveUser(user)
    .subscribe(
      (data) => {
          this.loadData();
        }
      )
  }

  findByUsername(username: string) {
    this.userService.getUsersByUsername(this.username).subscribe(
      (data) => {
        this.users = data;
        this.ukljuciPretrazivac = true;
      }
    )
}

  resetFilter() {
    this.userService.getUsersByUsername('').subscribe(
      (data) => {
        this.users = data;
        this.ukljuciPretrazivac = true;
      }
    )
  }
}
