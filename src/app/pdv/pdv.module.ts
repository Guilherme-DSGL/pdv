import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdvRoutingModule } from './pdv-routing.module';
import { PdvComponent } from './pdv.component';
import { TemplateModule } from './template/template.module';
import {  MatDialogModule } from '@angular/material/dialog';
import { ClientsModule } from './clients/clients.module';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { SaleModule } from './sale/sale.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PdvComponent,
  ],
  imports: [
    CommonModule,
    PdvRoutingModule,
    TemplateModule,
    MatDialogModule,
    ClientsModule,
    ProductsModule,
    CategoryModule,
    SaleModule,
    RouterModule
  ],
  exports: [
    PdvComponent
  ]
})
export class PdvModule { }
