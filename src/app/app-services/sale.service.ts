import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SaleDTO } from '../pdv/sale/saleDTO';
import { Sale } from '../pdv/sale/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }
  private url: string = 'http://localhost:8080/api/sales';
  
  create(sale: SaleDTO): Observable<Sale>{
    return this.http.post<Sale>(this.url, sale);
  }

  update(sale: Sale): Observable<any>{
      return this.http.put<Sale>(`${this.url}/${sale.id}`, sale);
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
