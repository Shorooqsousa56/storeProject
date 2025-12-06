import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';


@Injectable({
  providedIn: 'root'
})
export class CartService {
    private items: CartItem[] = [];


  constructor() { }
  addToCart(product: Product, quantity: number){
   const productExist=this.items.find(item=>item.id===product.id);
   if(productExist){
    productExist.quantity+=quantity;
    if(productExist.quantity > product.stock_balance){
      productExist.quantity=product.stock_balance;

    }
   }else{
    this.items.push({...product,quantity});

   }
  }

  updateQuantity(productId: number, quantity: number){
   const item =this.items.find(i=> i.id === productId);
   if(item){
    item.quantity=Math.min(quantity,item.stock_balance);

   }

  }

  

  getItems():CartItem[]{
    return this.items;
  }

  getTotalPrice(){
    return this.items.reduce((sum,item)=>sum+(item.price*item.quantity),0);
  }
  clearCart(){
    this.items=[];
  }
  
  removeFromCart(productId:number){
    this.items=this.items.filter(item=>item.id!==productId);

  }

}
