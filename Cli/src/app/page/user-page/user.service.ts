import { User } from 'app/model/user';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Page } from 'app/model/page';


@Injectable()
export class UserService {

  private path = 'api/user';
  private header = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get(this.path) as Observable<User[]>;
  }

  getUser(id: number): Observable<User> {
    // console.log('JEDAN USER ID', id);
    return this.http.get(`${this.path}/${id}`) as Observable<User>;
  }

  deleteUser(user: User) {
    return this.http.delete(`${this.path}/${user.id}`);
  }

  saveUser(user: User): Observable<User> {
    if (user.id === undefined) {
      return this.http.post(this.path, user, {headers: this.header}) as Observable<User>;
    }
    else {
      return this.http.put(`${this.path}/${user.id}`, user, {headers: this.header}) as Observable<User>;
    }
  }

  getUsersByUsername(username: string): Observable<User[]>  {
    // var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return this.http.get(this.path + '?username=' + username) as Observable<User[]>;
  }
}

