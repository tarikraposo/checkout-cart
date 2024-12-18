import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {

  cartItems = [
    {
      id: 1,
      name: "iPhone 12 Pro",
      color: "Golden",
      price: 999.00,
      image: "../../assets/images/iphone-12-pro.png"
    },
    {
      id: 2,
      name: "Apple Watch",
      color: "Blue",
      price: 399.00,
      image: "../../assets/images/apple-watch.png"
    },
    {
      id: 3,
      name: "iMac",
      color: "Green",
      price: 1199.00,
      image: "../../assets/images/imac.png"
    }
  ];

  



}
