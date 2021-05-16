import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductService } from '../products/product.service';
import { Cart } from './cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Cart;
  cnt = 0;
  totalSum = 0;
  productData: Product;
   items: Array<Product>;


  constructor(private cartService: CartService, private productService: ProductService) { 
    this.items=[];
  }

  removeFromCart(id) 
  {
    this.cartService.removeItemFromCart(id).subscribe(data=>{
      setTimeout(function(){
        window.location.reload(); 
        }, 200);
    })
    
  }
  ngOnInit(): void {
    this.cartService.viewAllCartItems().subscribe(data => {
      this.cartList = data;

      for (let key in data) {
        this.totalSum = this.totalSum + data[key].costPerUnit *1;
        this.cnt = this.cnt + 1;
      }

      for (let key in data) {
        var productId = data[key].productId;
        this.productService.viewProduct(productId).subscribe(viewData => {
          this.productData = viewData;
          this.items.push(this.productData);
        })
      }
    })
  }
}