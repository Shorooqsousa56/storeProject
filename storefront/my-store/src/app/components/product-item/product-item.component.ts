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
    @Output() productSelected = new EventEmitter<Product>(); 
  viewProduct(){
    this.productSelected.emit(this.product);
  }

}
