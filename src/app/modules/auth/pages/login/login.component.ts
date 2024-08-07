import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    recaptcha: new FormControl('')
  });
  showPassword = false;

  togglePasswordVisibility(){
    this.showPassword = !this.showPassword
  }
  login(){
    console.log(this.loginform.value);
  }
  
}
