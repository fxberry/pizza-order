import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderItemComponent } from './order-item.component';
import { BakeService } from './services/bake.service';
import { OrderComponent } from './order.component';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderItemComponent,
    OrderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    BakeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
