import { FormControl } from "@angular/forms";


export class ClientValidatorMessages {
    getAlocationMessages(alocation: FormControl): string{
        return alocation.hasError('required') ? 'O campo alocacao e requirido' : '';
    }
    getNameMessages(name: FormControl): string{
        return name.hasError('required') ? 'O campo nome e requirido' : '';
    }
    getPassMessages(pass: FormControl): string{
        return pass.hasError('required') ? 'O campo senha e requirido' : '';
    }
    getDataMessages(date: FormControl): string{
        return date.hasError('required') ? 'O campo data e requirido' : '';
    }

}