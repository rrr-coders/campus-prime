import { Injectable } from '@angular/core';

@Injectable()
export class JWTService {

  constructor() { }

  saveToken(key, value) {
    localStorage.setItem(key, value);
  }

  getToken(key): String {
    return localStorage.getItem(key);
  }

}
