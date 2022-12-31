import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';
import {  RouterModule } from '@angular/router';
import { ClientsModule } from './clients/clients.module';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { AppRoutingModule } from './app-routing.module';
import { SaleModule } from './sale/sale.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TemplateModule,
    RouterModule,
    ClientsModule,
    ProductsModule,
    CategoryModule,
    HttpClientModule,
    AppRoutingModule,
    SaleModule
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
