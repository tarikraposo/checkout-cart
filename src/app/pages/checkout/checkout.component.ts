import { Component } from '@angular/core';
import { ImageComponent } from "../../components/image/image.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ImageComponent, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  index$ = 3;

 cartItems = [
    {
      id: 1,
      name: "iPhone 12 Pro",
      quantity: 3,
      color: "Golden",
      price: 999.00,
      image: "../assets/images/iphone-12-pro.png"
    },
    {
      id: 2,
      name: "Apple Watch",
      quantity: 3,
      color: "Blue",
      price: 399.00,
      image: "../assets/images/apple-watch.png"
    },
    {
      id: 3,
      name: "iMac",
      quantity: 2,
      color: "Green",
      price: 1199.00,
      image: "../assets/images/imac.png"
    }
  ];

  removeItem(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
