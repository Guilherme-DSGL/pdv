import { FormGroup } from "@angular/forms";
import { Product } from "../products/product";
import { Client } from "../clients/client";
import { SaleDTO } from "./saleDTO";


export class Sale {
    id!: number;
    client!: Client | number;
    product!: Product | number;
    salePrice!: number;
    saleType!: string;
    saleDate!: Date;

    compareSale(a: any, b: any){
            if(a && b) return a.id === b.id;
            return false;
    }
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
    sale.id = formSale.controls['id'].value!;
    sale.client = formSale.controls['client'].value.id;
    sale.product = formSale.controls['product'].value.id;
    sale.salePrice = formSale.controls['salePrice'].value!;
    sale.saleType = formSale.controls['saleType'].value!;
    sale.saleDate = formSale.controls['saleDate'].value!;
    return sale;
}

export function saleDTOFromGroupForm(formSale: FormGroup): SaleDTO{
    let sale = new SaleDTO();
    sale.client = formSale.controls['client'].value.id;
    sale.product = formSale.controls['product'].value.id;
    sale.salePrice = formSale.controls['salePrice'].value!;
    sale.saleType = formSale.controls['saleType'].value!;
    sale.saleDate = formSale.controls['saleDate'].value!;
    return sale;
}

export let saleResponseMessages = {
    "sucess": "Sucesso ao Cadastrar o producto",
    "updateSucess": "Sucesso ao atualziar o producto" 
}