import { Component, Input } from '@angular/core';
import { Product } from '../../../interface/product';
import { CartService } from '../../../services/Cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product: Product | null = null;
}
