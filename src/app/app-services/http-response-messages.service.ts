
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpResponseMessagesService {
 
   private statusResponse = new Map<number, string>([
    [201, "Formulario foi salvo com sucesso"],
    [204, "Atualizado com sucesso"],
    [404, "Nao foi possivel localiza-lo"],
  
   ])
  constructor() { }

  httpResponseMessages(status: number): string{
      return this.statusResponse.get(status) ?? 'Erro Desconhecido';
  }
}

export enum statusNumber  {
  CREATED = 201,
  NO_CONTENT = 204,
}