import { Component, OnInit, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { User } from 'app/model/user';
import { UserService } from 'app/page/user-page/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'app/service/authentication-service.service';
import { ToastsManager } from 'ng2-toastr';
import { ucs2 } from 'punycode';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  @Input()
  change: boolean;

  @Output()
  postUser: EventEmitter<User> = new EventEmitter();

  public forEdit: User;
  public user: User;
  public id: number;
  public isDataAvailable: boolean;

  constructor(private userService: UserService,  private router: Router,
    private route: ActivatedRoute,  private authenticationService: AuthenticationService, public toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.load();
    this.loadData();
    this.forEdit = {
      username: null,
      role: null,
      firstName: null,
      lastName: null
    }
  }

  load() {
    this.user = {
      username: null,
      role: null,
      firstName: null,
      lastName: null
    }
  }

  reset() {
    this.load();
    this.change = false;
  }

  send() {
    this.postUser.next(this.user);
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

  save(user: User) {
    this.userService.saveUser(user)
    .subscribe(
      (data) => {
          this.loadData();
        }
      )
      this.toastr.success('You successfully created new user' , null, {toastLife: 2000});
  }
}
