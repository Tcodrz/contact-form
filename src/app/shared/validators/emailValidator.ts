import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
/**
 * Custom Validator to verify email address
 * @returns null if control is valid or Error if invalid
 */
export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    if (!control.value) return null;

    const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    return regex.test(control.value) ? null : { invalidEmail: control.value }
  }
}
