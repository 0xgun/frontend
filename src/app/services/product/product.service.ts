import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  searchTerm = '';
  products: Product[] = [];
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  search() {
    this.http.get(`/search/${this.searchTerm}`).subscribe((products: any) => {
      this.products = products;
    });
  }
}
