import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../client';
import { ClientService } from 'src/app/app-services/client.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/template/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpResponseMessagesService, statusNumber } from 'src/app/app-services/http-response-messages.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnInit {
    clients: Client[] = [];
    displayedColumns: string[] = ['id', 'name', 'alocation', 'birthDate', 'pass', 'actions'];
    dataSource: MatTableDataSource<Client>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    constructor(
      private service: ClientService,
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
          this.clients = response;
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
              this.dataSource.data = this.clients = this.clients.filter(client => client.id != id);
            },
            error: (response: HttpErrorResponse) => this.snackBar.open(this.httpMessage.httpResponseMessages(response.status), 'Fechar'),
          });
        } 
      })
    }
  }

