import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Order } from '../orders/list-order/order';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private httpClient: HttpClient) { }

  viewAllCartItems():Observable<Cart>{
    const baseUrl = "https://localhost:44381/api/cart"
    return this.httpClient.get<Cart>(baseUrl);
  }

  findItemInCart(id):Observable<Cart>{
    const baseUrl = "https://localhost:44381/api/cart/"+id;
    return this.httpClient.get<Cart>(baseUrl);
  }

  removeItemFromCart(id):Observable<Cart>{
    const baseUrl = "https://localhost:44381/api/cart/"+id;
    return this.httpClient.delete<Cart>(baseUrl);
  }

  addToCart(cartItem):Observable<Cart>{
    const baseUrl = "https://localhost:44381/api/cart";   
    return this.httpClient.post<Cart>(baseUrl, cartItem);
  }
  addToOrder(orderItem):Observable<Order>{
    const baseUrl = "https://localhost:44381/api/order";   
    return this.httpClient.post<Order>(baseUrl, orderItem);
  }
}
   