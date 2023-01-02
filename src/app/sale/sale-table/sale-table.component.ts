import { Component, ViewChild } from '@angular/core';
import { Sale } from '../sale';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SaleService } from 'src/app/app-services/sale.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpResponseMessagesService, statusNumber } from 'src/app/app-services/http-response-messages.service';
import { DialogComponent } from 'src/app/template/dialog/dialog.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sale-table',
  templateUrl: './sale-table.component.html',
  styleUrls: ['./sale-table.component.scss']
})
export class SaleTableComponent {
  sales: Sale[] = [];
  displayedColumns: string[] = ['id', 'product', 'client', 'salePrice', 'saleType', 'saleDate'];
  dataSource: MatTableDataSource<Sale>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private service: SaleService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private httpMessage: HttpResponseMessagesService,
    ){
    this.dataSource = new MatTableDataSource();
   
  }
  
  ngOnInit(){
    this.service.getAll().subscribe(
      (response) => {
        console.log(response);
        this.sales = response;
        this.dataSource.data =  response;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    
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
            this.snackBar.open(this.httpMessage.httpResponseMessages(statusNumber.NO_CONTENT), 'Fechar');
            this.dataSource.data = this.sales = this.sales.filter(sale => sale.id != id);
          },
          error: (response: HttpErrorResponse) => this.snackBar.open(this.httpMessage.httpResponseMessages(response.status), 'Fechar'),
        });
      } 
    })
  }
}
