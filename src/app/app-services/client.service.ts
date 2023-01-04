import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../pdv/clients/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  private url: string = 'http://localhost:8080/api/clients';
  
  create(client: Client): Observable<Client>{
    return this.http.post<Client>(this.url, client);
  }

  update(client: Client): Observable<any>{
      return this.http.put<Client>(`${this.url}/${client.id}`, client);
  }

  getById(id: number): Observable<Client>{
    return this.http.get<Client>(`${this.url}/${id}`);
  }

   getAll(): Observable<Client[]>{
      return this.http.get<Client[]>(this.url);
  } 

  deleteById(id: number): Observable<any>{
    return this.http.delete<Client>(`${this.url}/${id}`)
  }
}
