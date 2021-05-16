import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { AddTemComponent } from './add-tem/add-tem.component';


@NgModule({
  declarations: [
    CartComponent,
    AddTemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports:[AddTemComponent]
})
export class CartModule { }
