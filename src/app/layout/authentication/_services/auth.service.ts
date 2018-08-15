import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/user.model';

@Injectable()
export class AuthService {


  constructor(private http: HttpClient) {

  }

  login(user: any): Observable<any> {
    return this.http.post(`${environment.url}/auth`, user);
  }

  checkIfExists(params: any): Observable<any> {
    return this.http.head(`${environment.url}/users`, { params: params });
  }

  createUser(user: User): Observable<any> {
    return this.http.post(`${environment.url}/users`, user);
  }
}
