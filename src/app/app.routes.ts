import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'form', component: ProductFormComponent},
];
