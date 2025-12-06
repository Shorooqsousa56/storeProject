import { Component,Input,Output,EventEmitter  } from '@angular/core';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
    @Output() addToCartEvent  = new EventEmitter<{product: Product, quantity: number}>(); 
    @Output() viewProductEvent = new EventEmitter<Product>();
    quantity:number=1;

    increaseQuantity(){
    if(this.quantity < this.product.stock_balance) this.quantity++;

    }

    
    decreaseQuantity(){
    if(this.quantity >1 ) this.quantity--;

    }

    addToCart(){
          this.addToCartEvent.emit({ product: this.product, quantity: this.quantity });

    }

  viewProduct(){
    this.viewProductEvent.emit(this.product);
  }

}
