import { FormControl } from "@angular/forms";


export class UserValidatorMessages {
     getNameMessages(name: FormControl){
        return name.hasError('required') ? "O nome e requirido" : '';
    }

     getPasswordMessages(password: FormControl){
        return password.hasError('required') ? "A senha e requirida" : '';
    }
}