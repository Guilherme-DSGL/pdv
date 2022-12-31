import { Component, ViewChild } from '@angular/core';
import { Product, productFromGroupForm, productToGroupForm } from '../product';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpResponseMessagesService, statusNumber } from 'src/app/app-services/http-response-messages.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from 'src/app/app-services/product.service';
import { ProductValidatorMessages } from '../productValidatorMessage';
import { CategoryService } from 'src/app/app-services/category.service';
import { Category } from 'src/app/category/category';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent {
  product: Product;
  categories: Category[] = [];
  productValidatorMessages: ProductValidatorMessages;

  
  @ViewChild('f') myNgForm: any;
  
  formProduct = this.fob.group(
    {
      id: [undefined],
      name: ['', [Validators.required,Validators.minLength(3),]],
      brand: ['', [Validators.required, Validators.minLength(8),]],
      price: [0, [Validators.required]],
      purchasePrice: [0, [Validators.required]],
      stock: [0, [Validators.required]],
      category: [null, [Validators.required]]
    }
  );
  
  constructor(
    private fob: FormBuilder, 
    private service: ProductService,  
    private categoryService: CategoryService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private responseMessages: HttpResponseMessagesService,
    ){
    this.product = new Product();
    this.productValidatorMessages = new ProductValidatorMessages();
  }

 
  ngOnInit(): void {
    this.formProduct.controls['id'].disable();
    let params: any = this.activatedRoute.params
    this.getById(params.value.id);
    this.getCategories();
    
  }

  getCategories(){
    this.categoryService.getAll().subscribe(categories => this.categories = categories)
  }

  getFieldIsValid(field: FormControl): boolean{
    return field.invalid && (field.touched || field.dirty);
  }

  resetForm(): void{
    this.myNgForm.resetForm();
  }
  
  submit(){
    this.product = productFromGroupForm(this.formProduct);
    console.log(this.product);
    (!this.product.id) ? this.create() : this.update();
  }

  create(){
    this.service.create(this.product).subscribe({
      next: response => {
        this._snackBar.open(this.responseMessages.httpResponseMessages(statusNumber.CREATED), 'Fechar', {})
        this.formProduct = productToGroupForm(response, this.formProduct);
      },
      error: (response: HttpErrorResponse) =>  this._snackBar.open(this.responseMessages.httpResponseMessages(response.status), 'Fechar', {}),
    });
    this.resetForm();
  }
  update(){
    this.service.update(this.product).subscribe({
     next:  response => {
      this._snackBar.open(this.responseMessages.httpResponseMessages(statusNumber.NO_CONTENT), 'Fechar', {})
     },
     error: (error: HttpErrorResponse) => {
      this._snackBar.open(this.responseMessages.httpResponseMessages(error.status), 'Fechar')
     }
    }
    );
  
  }
  getById(id: number){
    if(id){ 
    this.service.getById(id).subscribe(
      (response) => {
        this.formProduct = productToGroupForm(response, this.formProduct)
      }
    ) 
    }
  }
}