import { Injectable } from '@angular/core';
interface Product {
  name: string;
  price: number;
  quantity: number;
}
@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: any = [];
  total: number = 0;
  getCart() {
    return this.items;
  }
  removeFromCart(product: any) {
    let index = this.items.indexOf(product)
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  addToCart(product: any, quantity: Number) {
    product.quantity = quantity;
    this.items.push(product);
  }
  changeQuantity(modifier: String, product: any) {
    let selectedItem = this.items.find((item: { name: String; }) => item.name === product.name);
    if (modifier === 'increase') {
      selectedItem.quantity++;
    } else {
      selectedItem.quantity--;
      if (selectedItem.quantity === 0) {
        this.removeFromCart(selectedItem);
      }
    }
  }
  getTotal(discount: number) {
    this.total = this.items.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);
    this.total -= discount;
    this.total = Math.ceil(this.total * 100) / 100;
    return this.total;
  }
}
