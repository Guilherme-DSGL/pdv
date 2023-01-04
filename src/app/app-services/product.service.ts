import { Injectable } from '@angular/core';
import { Product } from '../pdv/products/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductDTO } from '../pdv/products/productsDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private url: string = 'http://localhost:8080/api/products';
  
  create(product: ProductDTO): Observable<Product>{
    return this.http.post<Product>(this.url, product);
  }

  update(product: Product): Observable<any>{
      return this.http.put<Product>(`${this.url}/${product.id}`, product);
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
