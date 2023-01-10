import { FormGroup } from "@angular/forms";

export class User {
     name!: string;
     password!: string;
}


export function userFromGroupForm(form: FormGroup){
    let user = new User();
    user.name = form.controls['name'].value;
    user.password = form.controls['password'].value!;
    return user;
}