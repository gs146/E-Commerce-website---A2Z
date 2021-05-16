import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../orders/list-order/order';
import { Category } from '../site-layout/category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  createProduct(productBody):Observable<Product>{
    const baseUrl = "https://localhost:44381/api/product";
    return this.httpClient.post<Product>(baseUrl,  JSON.stringify(productBody), {
      headers:new HttpHeaders()
      .set('Content-Type','application/json')
      });
  }

  viewProduct(productId):Observable<Product>{
    const baseUrl = "https://localhost:44381/api/product/"+productId;
    return this.httpClient.get<Product>(baseUrl);
  }

  viewAllProduct():Observable<Product>{
    const baseUrl = "https://localhost:44381/api/product"
    return this.httpClient.get<Product>(baseUrl);
  }

  searchCategoryProduct(categoryId):Observable<Product>{
      const baseUrl = "https://localhost:44381/api/product/find/"+categoryId;
    return this.httpClient.get<Product>(baseUrl);
  }

  getCategory(){
    const catUrl = "https://localhost:44381/product/category";
    return this.httpClient.get<Category>(catUrl);
  }

  updateProduct(productId, productBody):Observable<Product>{
    const baseUrl = "https://localhost:44381/api/product/"+productId;
    return this.httpClient.put<Product>(baseUrl, JSON.stringify(productBody), {
      headers:new HttpHeaders()
      .set('Content-Type','application/json')
      });
  }

  getAllCartItems(){
    const baseUrl = "https://localhost:44381/api/order";
    return this.httpClient.get<Order>(baseUrl);
  }

  searchProduct(searchQuery){
    
    const baseUrl = "https://localhost:44381/api/product/search/"+searchQuery;
    return this.httpClient.get<Product>(baseUrl,  {
      headers:new HttpHeaders()
      .set('Content-Type','application/text')
      });
  }

}
