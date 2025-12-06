import { Component,OnInit  } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
 products: (Product& { quantity?: number })[]=[];
 loadingProducts:boolean=false;
 error:string='';

 constructor(private productService:ProductService,private router: Router, private cartService: CartService){}
 ngOnInit(): void {
     this.getProducts();
 }
 getProducts():void{
 this.loadingProducts=true;
 this.productService.getProducts().subscribe({
  next:(data)=>{
    this.products=data;
    this.loadingProducts=false;
    this.products=data.map(product=>({...product,quantity:1}));
     console.log(this.products); 
  },
  error:(err)=>{
   this.error='failed loading products';
   console.error(err);
   this.loadingProducts=false;

  }

 });



 }
  increaseQuantity(product: Product & { quantity?: number }){
 if(product.quantity! < product.stock_balance){
  product.quantity!++;
 }

 }

 decreaseQuantity(product:Product & { quantity?: number }){
 if(product.quantity! > 1){
  product.quantity!--;
 }
  
 }
addToCart(product:Product & { quantity?: number }){
 console.log('add to cart', product.name, 'Qty:', product.quantity);
   if (!product || product.quantity == null) return;
   
       this.cartService.addToCart(product, product.quantity!);

  
 }
 viewProduct(product:Product){
this.router.navigate(['/product',product.id]);

 }

}
