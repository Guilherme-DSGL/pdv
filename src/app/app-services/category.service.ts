import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../pdv/category/category';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  private url: string = 'http://localhost:8080/api/categories';
  
  create(category: Category): Observable<Category>{
    return this.http.post<Category>(this.url, category);
  }

  update(category: Category): Observable<any>{
      return this.http.put<Category>(`${this.url}/${category.id}`, category, );
  }

  getById(id: number): Observable<Category>{
    return this.http.get<Category>(`${this.url}/${id}`);
  }

   getAll(): Observable<Category[]>{
      return this.http.get<Category[]>(this.url);
  } 

  deleteById(id: number): Observable<any>{
    return this.http.delete<Category>(`${this.url}/${id}`)
  }
}
