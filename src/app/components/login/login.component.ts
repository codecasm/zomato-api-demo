/*
  @Project : Zomato API Demo
  @Author : Ashish Vishwakarma
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { LoginForm } from './login-form.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public loginInvalid: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) { }

  public ngOnInit(): void {
    this.form = LoginForm(this.fb);
  }

  // validating form data
  public validateFormData(): void {
    this.loginInvalid = (this.authService.login(this.form.value) ? false : true);
  }

  // submit the credentials and verify
  public onSubmit(): void {
    this.validateFormData();
    if (!this.loginInvalid) {
      this.route.navigate(['dashboard']);
    }
  }

}
