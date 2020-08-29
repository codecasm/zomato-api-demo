/*
  @Project : Zomato API demo
  @Author : Ashish Vishwakarma
*/

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function formGroup(fb: FormBuilder): FormGroup {

    const formGroupObject = {
        username: ['', Validators.email],
        password: ['', Validators.required]
    };

    return fb.group(formGroupObject);
}

export function LoginForm(fb: FormBuilder): FormGroup {
    return formGroup(fb);
}
