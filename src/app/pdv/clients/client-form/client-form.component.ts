import { Component, OnInit, ViewChild } from '@angular/core';
import { Client, alocations, clientFromGroupForm, clientToGroupForm} from '../client';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {  ClientValidatorMessages } from './clientValidatorMessages';
import { ClientService } from 'src/app/app-services/client.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponseMessagesService, statusNumber } from 'src/app/app-services/http-response-messages.service';
import { SnackBarComponent } from '../../template/snack-bar/snack-bar.component';
import { AuthService } from 'src/app/app-services/auth.service';



@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  client: Client;
  clientValidatorMessages: ClientValidatorMessages;
  alocations: string[];
  
  @ViewChild('f') myNgForm: any;
  
  formClient = this.fob.group(
    {
      id: [undefined],
      name: ['', [Validators.required,Validators.minLength(3),]],
      pass: ['', [Validators.required, Validators.minLength(8),]],
      alocation: ['', [Validators.required]],
      birthDate: [new Date(), [Validators.required]]
    }
  );
  
  constructor(
    private fob: FormBuilder, 
    private service: ClientService,  
    private _snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpResponseMessages: HttpResponseMessagesService,
    private authService: AuthService,
    ){
    this.client = new Client();
    this.clientValidatorMessages = new ClientValidatorMessages();
    this.alocations = alocations;

  }

 
  ngOnInit(): void {
    let params: any = this.activatedRoute.params
    this.getById(params.value.id);
    this.formClient.controls['id'].disable();
  }

  getFieldIsValid(field: FormControl): boolean{
    return field.invalid && (field.touched || field.dirty);
  }

  resetForm(): void{
    this.myNgForm.resetForm();
  }
  
  submit(){
    this.client = clientFromGroupForm(this.formClient);
    (!this.client.id) ? this.create() : this.update();
  }

  create(){
    this.service.create(this.client).subscribe({
      next: response => {
        this.httpResponseMessages.getSucessResponse(statusNumber.CREATED)
        this.formClient = clientToGroupForm(response, this.formClient);
      },
      error: (error: HttpErrorResponse) => this.httpResponseMessages.getErrorResponse(error),
    });
    this.resetForm();
  }
  update(){
    this.service.update(this.client).subscribe({
     next:  response => {
      this.httpResponseMessages.getSucessResponse(statusNumber.UPDATED)
     },
     error: (error: HttpErrorResponse) => {
      this.httpResponseMessages.getErrorResponse(error);
     }
    }
    );
  
  }
  getById(id: number){
    if(id){ 
    this.service.getById(id).subscribe({
      next:
      (response) => {
        this.formClient = clientToGroupForm(response, this.formClient)
      },
       error: (error: HttpErrorResponse) => {
        this.httpResponseMessages.getErrorResponse(error);
     }
    }
    ) 
    }
  }
}
