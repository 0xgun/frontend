import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interface/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  quantity: number = 1;
  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(+id).subscribe({
        next: (product: Product) => {
          this.product = product;
        },
        error: (error: any) => {
          console.error('Error loading product:', error);
          // You can handle errors here, such as displaying an error message to the user
        },
      });
    }
  }
  incrementQuantity() {
    this.quantity++;
  }
  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
