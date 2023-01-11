
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../pdv/template/snack-bar/snack-bar.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { keyAcessToken } from '../interceptor/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class HttpResponseMessagesService {
 
   private statusResponse = new Map<number, string>([
    [201, "Cadastro realiazado com sucesso"],
    [204, "Atualizado com sucesso"],
    [404, "Nao foi possivel localiza-lo"],
    [401, "Credenciais Incorretas"],
    [403, "Nao e possivel ascessar"],
    [601, "Login realizado com sucesso"],
    [602, "Atualizado com sucesso"],
    [603, "Deletado com sucesso"],
   ])
  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  httpResponseMessages(status: number): string{
      if(status){
        return this.statusResponse.get(status) ?? "Erro Desconhecido";
      }
      return "Erro ao se conectar com a base de dados";
  }

  getMessages(status: number): string{
    if(status){
      return this.statusResponse.get(status) ?? "Erro Desconhecido";
    }
    return "Erro ao se conectar com a base de dados";
  }

  getErrorResponse(error: HttpErrorResponse){
    if(error.status === statusNumber.UNAUTHORIZED){
      localStorage.removeItem(keyAcessToken)
      this.router.navigate(['/login']);
    }
    this._snackBar.openFromComponent(SnackBarComponent, {data: { 
      message: this.getMessages(error.status),
      sucess: false,
    }});
  }

  getSucessResponse(status: number){
    this._snackBar.openFromComponent(SnackBarComponent, {data: {
      message: this.getMessages(status),
      sucess: true
    }})
  }
}

export enum statusNumber  {
  CREATED = 201,
  NO_CONTENT = 204,
  UNAUTHORIZED = 401,
  LOGIN_SUCESS = 601,
  UPDATED = 602,
  DELETED = 603,


}