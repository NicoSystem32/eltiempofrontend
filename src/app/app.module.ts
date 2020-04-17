import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SliderComponent } from './components/slider/slider.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { LookproductsComponent } from './components/lookproducts/lookproducts.component';
import { UpdateproductsComponent } from './components/updateproducts/updateproducts.component';
import { DeleteproductsComponent } from './components/deleteproducts/deleteproducts.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    SliderComponent,
    CuerpoComponent,
    FooterComponent,
    CreateproductComponent,
    LookproductsComponent,
    UpdateproductsComponent,
    DeleteproductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
