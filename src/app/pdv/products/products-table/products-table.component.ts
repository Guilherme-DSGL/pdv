import { Component, ViewChild } from '@angular/core';
import { Product } from '../product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductService } from 'src/app/app-services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpResponseMessagesService, statusNumber } from 'src/app/app-services/http-response-messages.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogComponent } from 'src/app/pdv/template/dialog/dialog.component';
@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'brand', 'price', 'purchasePrice', 'stock', 'actions'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private service: ProductService,
    private dialog: MatDialog,
    private httpResponseMessages: HttpResponseMessagesService,
    ){
    this.dataSource = new MatTableDataSource();
   
  }
  
  ngOnInit(){
    this.getAllProducts();
  }

  getAllProducts(){
    this.service.getAll().subscribe({
      next:
      (response) => {
        console.log(response);
        this.products = response;
        this.dataSource.data =  response;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    
      },
      error: (error: HttpErrorResponse) =>  this.httpResponseMessages.getErrorResponse(error),
    }
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(id: number): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: {
        title: 'Voce deseja realmente excluir?',
        closeMessage: 'Cancelar',
        okMessage: 'Excluir'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.service.deleteById(id).subscribe({
          next: response => {
            this.httpResponseMessages.getSucessResponse(statusNumber.DELETED)
            this.dataSource.data = this.products = this.products.filter(product => product.id != id);
          },
          error:(error: HttpErrorResponse) =>  this.httpResponseMessages.getErrorResponse(error),
        });
      } 
    })
  }
}
