import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Category, categoryFromGroupForm, categoryToGroupForm } from '../category';
import { CategoryService } from 'src/app/app-services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpResponseMessagesService, statusNumber } from 'src/app/app-services/http-response-messages.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoryValidatorMessages } from '../categoryValidatorMessage';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent {
  category: Category;
  categoryValidatorMessages: CategoryValidatorMessages;

  
  @ViewChild('f') myNgForm: any;
  
  formCategory = this.fob.group(
    {
      id: [undefined],
      name: ['', [Validators.required,Validators.minLength(3),]],
    }
  );
  
  constructor(
    private fob: FormBuilder, 
    private service: CategoryService,  
    private _snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private responseMessages: HttpResponseMessagesService,
    ){
    this.category = new Category();
    this.categoryValidatorMessages = new CategoryValidatorMessages();
  }

 
  ngOnInit(): void {
    this.formCategory.controls['id'].disable();
    let params: any = this.activatedRoute.params
    this.getById(params.value.id);
  }

  getFieldIsValid(field: FormControl): boolean{
    return field.invalid && (field.touched || field.dirty);
  }

  resetForm(): void{
    this.myNgForm.resetForm();
  }
  
  submit(){
    this.category = categoryFromGroupForm(this.formCategory);
    (!this.category.id) ? this.create() : this.update();
  }

  create(){
    this.service.create(this.category).subscribe({
      next: response => {
        this._snackBar.open(this.responseMessages.httpResponseMessages(statusNumber.CREATED), 'Fechar', {})
        this.formCategory = categoryToGroupForm(response, this.formCategory);
      },
      error: (response: HttpErrorResponse) =>  this._snackBar.open(this.responseMessages.httpResponseMessages(response.status), 'Fechar', {}),
    });
    this.resetForm();
  }
  update(){
    this.service.update(this.category).subscribe({
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
        this.formCategory = categoryToGroupForm(response, this.formCategory)
      }
    ) 
    }
  }
}
