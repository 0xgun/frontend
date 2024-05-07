import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interface/product';
import { ProductService } from '../../services/product/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      console.log(data);
      this.products = data;
    });
  }
  search() {
    this.http.get(`/search/${this.searchTerm}`).subscribe((products: any) => {
      this.products = products;
    });
  }
  //implement reset function
  reset() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
