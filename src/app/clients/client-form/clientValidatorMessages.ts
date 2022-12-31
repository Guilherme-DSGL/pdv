import { FormControl } from "@angular/forms";


export class ClientValidatorMessages {
    getAlocationMessages(alocation: FormControl): string{
        return alocation.hasError('required') ? 'O campo alocacao e requirido' : '';
    }
    getNameMessages(alocation: FormControl): string{
        return alocation.hasError('required') ? 'O campo nome e requirido' : '';
    }
    getPassMessages(alocation: FormControl): string{
        return alocation.hasError('required') ? 'O campo senha e requirido' : '';
    }
    getDataMessages(alocation: FormControl): string{
        return alocation.hasError('required') ? 'O campo data e requirido' : '';
    }

}