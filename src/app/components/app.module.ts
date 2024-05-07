import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { StoreComponent } from './store/store.component';
import { ProductDetailsComponent } from './store/product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { ProductItemComponent } from './store/product-item/product-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    UserAccountComponent,
    StoreComponent,
    ProductDetailsComponent,
    HomeComponent,
    ProductItemComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
