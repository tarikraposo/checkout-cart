import { Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
    { path: 'home', component: CheckoutComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
];
