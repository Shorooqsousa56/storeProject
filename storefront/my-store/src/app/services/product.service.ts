import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  //get all products
   getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);

  }
  //get product by id
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }


}
