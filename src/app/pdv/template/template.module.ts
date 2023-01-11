import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ListTileComponent } from './side-bar/list-tile/list-tile.component';
import { RouterModule } from '@angular/router';
import { TitleSideBarComponent } from './side-bar/title-side-bar/title-side-bar.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SnackBarComponent } from './snack-bar/snack-bar.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    ListTileComponent,
    TitleSideBarComponent,
    DialogComponent,
    SnackBarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatDialogModule,
    RouterModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
      duration: 2500,
      horizontalPosition: "Left",
      verticalPosition: "Right"
    }}
  ],
  exports: [
    NavBarComponent,
    SideBarComponent,
    ListTileComponent,
    DialogComponent
  ]
  
})
export class TemplateModule { }
