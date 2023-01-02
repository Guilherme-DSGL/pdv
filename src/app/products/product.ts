import { FormGroup } from "@angular/forms";
import { Category } from "../category/category";
import { ProductDTO } from "./productsDTO";

export class Product {
    id!: number;
    name!: string;
    brand!: string;
    category!: Category;
    price!: number | null;
    purchasePrice!: number | 0;
    stock!: number | 0;

    compareCategories(a: Category, b: Category): boolean {
       if(a.id && b.id) return a.id === b.id;
       return false;
    }
}


export function productToGroupForm(product: Product, formProduct: FormGroup): FormGroup {
    formProduct.controls['id'].setValue(product.id);
    formProduct.controls['id'].disable();
    formProduct.controls['name'].setValue(product.name);
    formProduct.controls['brand'].setValue(product.brand);
    formProduct.controls['price'].setValue(product.price);
    formProduct.controls['category'].setValue(product.category);
    formProduct.controls['purchasePrice'].setValue(product.purchasePrice);
    formProduct.controls['stock'].setValue(product.stock); 
    return formProduct;
}

export function productDTOFromGroupForm(formProduct: FormGroup): ProductDTO{
    let productDTO = new ProductDTO();
 
    productDTO.name = formProduct.controls['name'].value!;
    productDTO.brand = formProduct.controls['brand'].value!;
    productDTO.price = formProduct.controls['price'].value!;
    productDTO.purchasePrice = formProduct.controls['purchasePrice'].value!;
    productDTO.stock = formProduct.controls['stock'].value!;
    productDTO.category = formProduct.controls['category'].value.id;
   
    return productDTO;
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

