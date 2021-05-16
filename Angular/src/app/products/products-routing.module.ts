import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTemComponent } from '../cart/add-tem/add-tem.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'add-product', component: AddProductComponent },
  {path:'view-product/:id', component:ViewProductComponent},
  // {path:'list-product', component:ViewAllProductComponent},
  {path:'category/:id', component:ViewProductByCategoryComponent},
  {path:'view-by-date', component:ViewProductByDateComponent},
  {path:'add-product', component:AddProductComponent},
  {path:'update-product/:id', component:UpdateProductComponent},
  {path:'search', component:SearchProductComponent},


];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
 