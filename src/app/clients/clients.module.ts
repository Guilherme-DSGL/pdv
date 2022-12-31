import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientFormComponent } from './client-form/client-form.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TemplateModule } from '../template/template.module';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
    declarations: [
        ClientFormComponent,
        ClientsTableComponent,
    ],
    providers: [
        MatDatepickerModule,
    ],
    imports: [
        CommonModule,
        ClientsRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSnackBarModule,
        TemplateModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
    ]
})
export class ClientsModule { }
