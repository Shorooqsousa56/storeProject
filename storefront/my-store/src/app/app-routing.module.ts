import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, 
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductDetailComponent },
    { path: 'confirm', component: ConfirmationComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
