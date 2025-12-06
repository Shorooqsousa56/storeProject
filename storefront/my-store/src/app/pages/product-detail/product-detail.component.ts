import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent  implements OnInit{
  product: Product | null = null;
  loading: boolean = true;
  error: string = '';
  quantity:number=1;

  constructor(private route: ActivatedRoute,private productService: ProductService, private cartService: CartService){

    }
    ngOnInit(): void {
        const id =Number(this.route.snapshot.paramMap.get('id'));
        if(id){
          this.productService.getProductById(id).subscribe({
            next:(data)=>{
              this.product=data;
              this.loading=false;
            },
            error:(err)=>{
            this.error='Failed loading a product';
            console.error(err);
            this.loading=false;

            }   
          });
        }

    }

     increaseQuantity(){
 if(this.quantity! < this.product!.stock_balance){
  this.quantity!++;
 }

 }

 decreaseQuantity(){
 if(this.quantity! > 1){
  this.quantity!--;
 }
  
 }
addToCart(){
      this.cartService.addToCart(this.product!, this.quantity);

   console.log('add to cart', this.product!.name, 'Qty:', this.quantity);

 }

}
