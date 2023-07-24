import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    title: 'Products',
    path: 'products',
    component: ProductListComponent,
  },
  {
    title: 'Checkout',
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    title: 'Success',
    path: 'success',
    component: SuccessComponent
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
