import { FormGroup } from "@angular/forms";
import { Product } from "../products/product";


export class Sale {
    id!: number;
    client!: number;
    product!: Product;
    salePrice!: number;
    saleType!: string;
    saleDate!: Date;
}

export function saleToGroupForm(sale: Sale, formSale: FormGroup): FormGroup {
    formSale.controls['id'].setValue(sale.id);
    formSale.controls['id'].disable();
    formSale.controls['client'].setValue(sale.client);
    formSale.controls['product'].setValue(sale.product);
    formSale.controls['salePrice'].setValue(sale.salePrice);
    formSale.controls['saleType'].setValue(sale.saleType);
    formSale.controls['saleDate'].setValue(sale.saleDate); 
    return formSale;
}

export function saleFromGroupForm(formSale: FormGroup): Sale{
    let sale = new Sale();
    sale.id = formSale.controls['id'].value;
    sale.client = formSale.controls['client'].value!;
    sale.product = formSale.controls['product'].value;
    sale.salePrice = formSale.controls['salePrice'].value!;
    sale.saleType = formSale.controls['saleType'].value!;
    sale.saleDate = formSale.controls['saleDate'].value!;
    return sale;
}


export let saleResponseMessages = {
    "sucess": "Sucesso ao Cadastrar o producto",
    "updateSucess": "Sucesso ao atualziar o producto" 
}