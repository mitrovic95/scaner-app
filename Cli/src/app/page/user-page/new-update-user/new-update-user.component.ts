import { Component, OnInit, Input, EventEmitter, Output, ViewContainerRef } from '@angular/core';
import { User } from 'app/model/user';
import { UserService } from 'app/page/user-page/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'app/service/authentication-service.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-new-update-user',
  templateUrl: './new-update-user.component.html',
  styleUrls: ['./new-update-user.component.css']
})
export class NewUpdateUserComponent implements OnInit {

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
    this.route.params
    .subscribe(
      (params) => {
        this.isDataAvailable = false;
        this.id = +params['id'];
        console.log('ID', this.id);
      }
    )
    this.userService.getUser(this.id)
    .subscribe(
      (data) => {
        console.log('DATA', data);
        this.user = data;
        this.isDataAvailable = true;
      }
    );
  };


  save(user: User) {
    this.userService.saveUser(user)
    .subscribe(
      (data) => {
          this.loadData();
        }
      )
      this.toastr.success('You successfully updated user' , null, {toastLife: 2000});
  }

  edit(users: User) {
    this.forEdit = users;
    this.change = true;
  }

}
