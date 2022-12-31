import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { SaleFormComponent } from './sale-form/sale-form.component';
import { SaleTableComponent } from './sale-table/sale-table.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    SaleFormComponent,
    SaleTableComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class SaleModule { }
