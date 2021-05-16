import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from './orders/list-order/list-order.component';
import { ProductsComponent } from './products/products.component';
import { SearchProductComponent } from './products/search-product/search-product.component';
import { ViewAllProductComponent } from './products/view-all-product/view-all-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';



const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  {path:'', component:ViewAllProductComponent},
{path:'order', component:ListOrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
