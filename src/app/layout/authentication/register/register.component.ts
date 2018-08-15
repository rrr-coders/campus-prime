import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userService: AuthService
  ) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      username: ['', Validators.required],
      registerNo: ['', Validators.required]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    const user: User = {
      firstname: this.f.firstname.value,
      lastname: this.f.lastname.value,
      email: this.f.email.value,
      registerNo: this.f.registerNo.value,
      username: this.f.username.value,
      password: this.f.password.value,
    };

    this.userService.createUser(user)
      .subscribe((data => {
        console.log(data);
      }));
  }

}
