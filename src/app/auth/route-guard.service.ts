/*
    @Project: Zomato API Demo
    @Author: Ashish Vishwakarma
*/

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  // this method checks access before route
  public canActivate(): boolean {
    if (this.authService.validateLogin()) {
      return true;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
