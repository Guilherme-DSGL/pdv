import { Injectable } from '@angular/core';
import { Sale } from '../sale/sale';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }
  private url: string = 'http://localhost:8080/api/products';
  
  create(client: Sale): Observable<Sale>{
    return this.http.post<Sale>(this.url, client);
  }

  update(client: Sale): Observable<any>{
      return this.http.put<Sale>(`${this.url}/${client.id}`, client);
  }

  getById(id: number): Observable<Sale>{
    return this.http.get<Sale>(`${this.url}/${id}`);
  }

   getAll(): Observable<Sale[]>{
      return this.http.get<Sale[]>(this.url);
  } 

  deleteById(id: number): Observable<any>{
    return this.http.delete<Sale>(`${this.url}/${id}`)
  }
}
