import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private url: string = 'http://localhost:8080/api/products';
  
  create(client: Product): Observable<Product>{
    return this.http.post<Product>(this.url, client);
  }

  update(client: Product): Observable<any>{
      return this.http.put<Product>(`${this.url}/${client.id}`, client);
  }

  getById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`);
  }

   getAll(): Observable<Product[]>{
      return this.http.get<Product[]>(this.url);
  } 

  deleteById(id: number): Observable<any>{
    return this.http.delete<Product>(`${this.url}/${id}`)
  }
}
