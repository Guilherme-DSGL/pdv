import { FormControl } from "@angular/forms";

export class SaleValidatorMessages {
    getBrandMessages(alocation: FormControl): string{
        return alocation.hasError('required') ? 'O campo alocacao e requirido' : '';
    }
    getNameMessages(alocation: FormControl): string{
        return alocation.hasError('required') ? 'O campo nome e requirido' : '';
    }
    getPriceMessages(alocation: FormControl): string{
        return alocation.hasError('required') ? 'O campo senha e requirido' : '';
    }
    getPurchasePriceMessages(alocation: FormControl): string{
        return alocation.hasError('required') ? 'O campo senha e requirido' : '';
    }
    getStockMessages(alocation: FormControl): string{
        return alocation.hasError('required') ? 'O campo data e requirido' : '';
    }
    getCategoryMessages(alocation: FormControl): string{
        return alocation.hasError('required') ? 'O campo data e requirido' : '';
    }
}