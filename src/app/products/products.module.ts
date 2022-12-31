import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [   
    ProductsFormComponent,
    ProductsTableComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ProductsRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class ProductsModule { }
