import { Component, ViewChild } from '@angular/core';
import { FormBuilder,  FormControl,  Validators } from '@angular/forms';
import { AuthService } from '../app-services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User, userFromGroupForm } from './user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../pdv/template/snack-bar/snack-bar.component';
import { HttpResponseMessagesService, statusNumber } from '../app-services/http-response-messages.service';
import { UserValidatorMessages } from './userValidatorMessages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
      hidePassword = true;
      user: User = new User();
      loading = false;
      userMessages: UserValidatorMessages = new UserValidatorMessages();


      @ViewChild('f') myNgForm: any;
      
      constructor(
        private fob: FormBuilder,
        private service: AuthService,  
        private router: Router,
        private _snackBar: MatSnackBar,
        private httpMessages: HttpResponseMessagesService,
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
        this.loading = true;
        this.service.authenticate(this.user).subscribe({
         next:  response => {
          this._snackBar.openFromComponent(SnackBarComponent, {data:{ 
            message: this.httpMessages.getMessages(statusNumber.LOGIN_SUCESS),
            sucess: true,
          }});
            localStorage.setItem('acess-token', JSON.stringify(response));
            this.router.navigate(['/pdv']);
         },
         error: (error: HttpErrorResponse) => {
            this._snackBar.openFromComponent(SnackBarComponent, {data: { 
              message: this.httpMessages.getMessages(error.status),
              sucess: false,
            }});
         }
        }
        );
        this.loading = false;
      }
}   
