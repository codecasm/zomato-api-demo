/*
    @Project: Zomato API Demo
    @Author: Ashish Vishwakarma
*/

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IUsers } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // hardcoded credentials to be used
  private username = 'ashish@demo.com';
  private password = 'Demo@123';

  constructor(private route: Router) { }

  // validating the login and setting to localStorage
  public login(user: IUsers): boolean {
    if (this.username === user.username && this.password === user.password) {
      localStorage.setItem('login', 'true');
      return true;
    }
    else {
      return false;
    }
  }

  // validating the login through localStorage
  public validateLogin(): boolean {
    return (localStorage.getItem('login') === 'true') ? true : false;
  }

  // cleaning the local storage and routing back to login
  public logout(): void {
    localStorage.removeItem('login');
    this.route.navigate(['login']);
  }

}
