import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartItemComponent } from "./components/cart-item/cart-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'checkout';
}
