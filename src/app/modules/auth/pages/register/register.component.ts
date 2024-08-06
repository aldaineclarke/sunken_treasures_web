import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '@App/shared/validators/password-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    registrationForm = new FormGroup({
      first_name: new FormControl("", [Validators.minLength(2), Validators.required]),
      last_name: new FormControl("", [Validators.minLength(2), Validators.required]),
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/), Validators.required]),
      confirm_password: new FormControl("", [Validators.required]),
      recaptcha: new FormControl(""),
    },{ validators: passwordMatchValidator('password', 'confirm_password') });

    showPassword = false;
    showConfirmPassword = false;

    toggleConfirmPasswordVisibility(){
      this.showConfirmPassword = !this.showConfirmPassword
    }
    togglePasswordVisibility(){
      this.showPassword = !this.showPassword
    }

    registerUser(){
      console.log(this.registrationForm.value);
    }
    
}
