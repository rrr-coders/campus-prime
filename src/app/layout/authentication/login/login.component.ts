import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../../../auth.guard';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { JWTService } from '../../../_services/jwt.service';

import { log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private authGuard: AuthGuard,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private jwt: JWTService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const user = {
      username: this.f.username.value,
      password: this.f.password.value
    };
    this.auth.login(user).subscribe(data => {
      if (data.success) {
        console.log(data);
        this.authGuard.loggedIn = true;
        this.jwt.saveToken('token', data.token);
        this.jwt.saveToken('refreshToken', data.refreshToken);
        this.router.navigate(['/dashboard']);
      }
    });
  }

  get f() {
    return this.loginForm.controls;
  }
}
