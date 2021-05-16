import { HttpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/cart/cart';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/products/product';
import { ProductService } from 'src/app/products/product.service';
import { Order } from './order';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {
OrderList:Cart
items: Array<any>;
productData: Product
orderData: Array<Order>


  constructor(private productService: ProductService, private cartService: CartService) { 
    this.items=[]
    this.orderData=[]
  }

 
  ngOnInit(): void {
    console.log("reached here")
    this.cartService.viewAllCartItems().subscribe(viewData=>{
      this.OrderList = viewData;
      console.log("data is:", this.OrderList);
    
      
    for (let key in this.OrderList) {
      var productId = this.OrderList[key].productId;

      let obj={
        orderId:1,
        cartId:10,
        productId:this.OrderList[key].productId,
        email: "gs@gmail.com",
        quantity : this.OrderList[key].quantity,
        cost: this.OrderList[key].costPerUnit
      };
      // console.log("object",obj);

      this.cartService.addToOrder(obj).subscribe(data=>{
        console.log(data);
      })

    }


    })

  }

}
 