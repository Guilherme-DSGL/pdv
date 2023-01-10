import { Component, ViewChild } from '@angular/core';
import { FormBuilder,  FormControl,  Validators } from '@angular/forms';
import { AuthService } from '../app-services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User, userFromGroupForm } from './user';
import { Router } from '@angular/router';
import { openDialog } from '../pdv/template/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
      hidePassword = true;
      user: User = new User();
      @ViewChild('f') myNgForm: any;
   
      
      constructor(
        private fob: FormBuilder,
        private service: AuthService,  
        private router: Router,
        private _snackBar: MatSnackBar
      ){

      }
      formUser = this.fob.group(
        {
          name: ['', [Validators.required,Validators.minLength(3),]],
          password: ['', [Validators.required]],
        }
      );

   
      getFieldIsValid(field: FormControl): boolean{
        return field.invalid && (field.touched || field.dirty);
      }
    
      resetForm(): void{
        this.myNgForm.resetForm();
      }

      submit(){
        this.user = userFromGroupForm(this.formUser);
        this.authenticate();
      }
    
      authenticate(){
        this.service.authenticate(this.user).subscribe({
         next:  response => {
            localStorage.setItem('acess-token', JSON.stringify(response));
            this.router.navigate(['/pdv']);
         },
         error: (error: HttpErrorResponse) => {
            this._snackBar.open(error.message);
         }
        }
        );
      }
}
