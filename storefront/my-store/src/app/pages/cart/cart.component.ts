import { Component,OnInit  } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: CartItem[] = [];
    total: number = 0;
    fullName: string = '';
   address: string = '';
   creditCard: string = '';
   

  constructor(private cartService:CartService,private router: Router){}
  ngOnInit():void{
    this.cartItems=this.cartService.getItems();
    this.calculateTotal();
   
  }
  increase(item:CartItem){
    this.cartService.updateQuantity(item.id,item.quantity + 1);
    this.ngOnInit();

  }
   decrease(item:CartItem){
    this.cartService.updateQuantity(item.id,item.quantity - 1);
    this.ngOnInit();

  }
  calculateTotal(){
    this.total=this.cartService.getTotalPrice();
  }  

  

  remove(id:number){
    this.cartService.removeFromCart(id);
       this.ngOnInit();
 
  }

  checkout(){
    if(!this.fullName|| !this.address|| !this.creditCard){
      alert("please fill all fields");
      return;
    }

    const totalPrice=this.cartService.getTotalPrice();
    this.router.navigate(['/confirm'],{
      queryParams:{
        name:this.fullName,
        total:totalPrice
      }
    }).then(()=>{
      this.cartService.clearCart();   
    this.cartItems = [];            
    this.total = 0;
    });

    
  
  }

   


}
