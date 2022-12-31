import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpResponseMessagesService, statusNumber } from 'src/app/app-services/http-response-messages.service';
import { Sale, saleFromGroupForm, saleToGroupForm } from '../sale';
import { HttpErrorResponse } from '@angular/common/http';
import { SaleService } from 'src/app/app-services/sale.service';
import { SaleValidatorMessages } from '../saleValidatorsMessages';
import { Client } from 'src/app/clients/client';
import { Product } from 'src/app/products/product';
import { ClientService } from 'src/app/app-services/client.service';
import { ProductService } from 'src/app/app-services/product.service';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.scss']
})
export class SaleFormComponent {
  sale: Sale;
  clients: Client[] = []; 
  products: Product[] = [];
  saleValidatorMessages: SaleValidatorMessages;
  saleType = ['12x','11x', '10x', '9x', '8x', '7x', '6x', '5x', '4x', '3x', '2x', '1x',]

  
  @ViewChild('f') myNgForm: any;
  
  formSale = this.fob.group(
    {
      id: [undefined],
      client: [null, [Validators.required,Validators.minLength(3),]],
      product: [new Product(), [Validators.required, Validators.minLength(8),]],
      salePrice: [0, [Validators.required]],
      saleType: ['', [Validators.required]],
      saleDate: [new Date(), [Validators.required]],
    }
  );
  
  constructor(
    private fob: FormBuilder, 
    private service: SaleService,  
    private serviceClient: ClientService,
    private serviceProduct: ProductService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private responseMessages: HttpResponseMessagesService,
    ){
    this.sale = new Sale();
    this.saleValidatorMessages = new SaleValidatorMessages();
  }

 
  ngOnInit(): void {
    this.formSale.controls['id'].disable();
    let params: any = this.activatedRoute.params
    this.getById(params.value.id);
    this.initializeFields();
    
  }

  initializeFields(){
    this.serviceClient.getAll().subscribe(clients => this.clients = clients);
    this.serviceProduct.getAll().subscribe(products => this.products = products);
  }

  getFieldIsValid(field: FormControl): boolean{
    return field.invalid && (field.touched || field.dirty);
  }

  resetForm(): void{
    this.myNgForm.resetForm();
  }
  
  submit(){
    this.sale = saleFromGroupForm(this.formSale);
    console.log(this.sale);
    (!this.sale.id) ? this.create() : this.update();
  }

  create(){
    this.service.create(this.sale).subscribe({
      next: response => {
        this._snackBar.open(this.responseMessages.httpResponseMessages(statusNumber.CREATED), 'Fechar', {})
        this.formSale = saleToGroupForm(response, this.formSale);
      },
      error: (response: HttpErrorResponse) =>  this._snackBar.open(this.responseMessages.httpResponseMessages(response.status), 'Fechar', {}),
    });
    this.resetForm();
  }
  update(){
    this.service.update(this.sale).subscribe({
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
        this.formSale = saleToGroupForm(response, this.formSale)
      }
    ) 
    }
  }
}
