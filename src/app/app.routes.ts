import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { MainLayoutComponent } from './features/main-layout/main-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'cart', component: CartPageComponent },
      { path: 'login', component: LoginPageComponent},
    ]
  },
];
