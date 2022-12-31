import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpResponseMessagesService, statusNumber } from 'src/app/app-services/http-response-messages.service';
import { DialogComponent } from 'src/app/template/dialog/dialog.component';
import { Category } from '../category';
import { CategoryService } from 'src/app/app-services/category.service';

@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.scss']
})
export class CategoriesTableComponent {
  categories: Category[] = [];
  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<Category>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private service: CategoryService,
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
        this.categories = response;
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
            this.dataSource.data = this.categories = this.categories.filter(category => category.id != id);
          },
          error: (response: HttpErrorResponse) => this.snackBar.open(this.httpMessage.httpResponseMessages(response.status), 'Fechar'),
        });
      } 
    })
  }
}
