import { FormControl } from "@angular/forms";


export class CategoryValidatorMessages {
    getNameMessages(alocation: FormControl): string{
        return alocation.hasError('required') ? 'O campo nome e requirido' : '';
    }
}