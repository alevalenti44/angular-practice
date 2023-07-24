import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
interface Product {
  name: string;
  price: number;
  outOfStock?: boolean;
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(
    private cartService: CartService,
    private router: Router
  ) { }
  productList: Product[] = [
    { name: 'Product 01', price: 12.99 },
    { name: 'Product 02', price: 12.99, outOfStock: true },
    { name: 'Product 03', price: 12.99 },
    { name: 'Product 04', price: 12.99 },
    { name: 'Product 05', price: 12.99 },
    { name: 'Product 06', price: 12.99 },
  ];
  addToCart(product: Product, quantity: number): void {
    this.cartService.addToCart(product, quantity);
  }
  getCart(): Product[] {
    return this.cartService.getCart();
  }
  getItemFromCart(product: any) {
    let cartItems = this.cartService.getCart();
    return cartItems.find((item: { name: String; }) => item.name === product.name);
  }
  changeQuantity(modifier: string, product: Product): void {
    this.cartService.changeQuantity(modifier, product)
  }
  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
