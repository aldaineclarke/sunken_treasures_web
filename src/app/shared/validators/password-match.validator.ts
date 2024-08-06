import { ValidatorFn, AbstractControl } from "@angular/forms";

export function passwordMatchValidator(password: string, confirmPassword: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const passwordControl = control.get(password);
      const confirmPasswordControl = control.get(confirmPassword);
  
      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }
  
      const error = passwordControl.value !== confirmPasswordControl.value ? { matching: true } : null;
      confirmPasswordControl.setErrors(error);
  
      return error;
    };
  }