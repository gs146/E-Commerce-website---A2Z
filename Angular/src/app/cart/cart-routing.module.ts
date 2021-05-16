import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTemComponent } from './add-tem/add-tem.component';
import { CartComponent } from './cart.component';

const routes: Routes = [
  { path: '', component: CartComponent },
  {path:'add-to-cart/:id', component:AddTemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
 