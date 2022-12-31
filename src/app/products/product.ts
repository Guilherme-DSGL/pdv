import { FormGroup } from "@angular/forms";

export class Product {
    id!: number;
    name!: string;
    brand!: string;
    category!: Int16Array;
    price!: number;
    purchasePrice!: number;
    stock!: number;
}


export function productToGroupForm(product: Product, formProduct: FormGroup): FormGroup {
    formProduct.controls['id'].setValue(product.id);
    formProduct.controls['id'].disable();
    formProduct.controls['name'].setValue(product.name);
    formProduct.controls['brand'].setValue(product.brand);
    formProduct.controls['price'].setValue(product.price);
    formProduct.controls['purchasePrice'].setValue(product.purchasePrice);
    formProduct.controls['stock'].setValue(product.stock); 
    return formProduct;
}

export function productFromGroupForm(formProduct: FormGroup): Product{
    let product = new Product();
    product.id = formProduct.controls['id'].value;
    product.name = formProduct.controls['name'].value!;
    product.brand = formProduct.controls['brand'].value!;
    product.price = formProduct.controls['price'].value!;
    product.purchasePrice = formProduct.controls['purchasePrice'].value!;
    product.stock = formProduct.controls['stock'].value!;
    product.category = formProduct.controls['category'].value!;
   
    return product;
}


export let productResponseMessages = {
    "sucess": "Sucesso ao Cadastrar o producto",
    "updateSucess": "Sucesso ao atualziar o producto" 
}