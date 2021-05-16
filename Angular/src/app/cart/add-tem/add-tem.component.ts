import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Console } from 'node:console';
import { Product } from 'src/app/products/product';
import { ProductService } from 'src/app/products/product.service';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-add-tem',
  templateUrl: './add-tem.component.html',
  styleUrls: ['./add-tem.component.css']
})
export class AddTemComponent implements OnInit {
  productID = 0;
  productData: Product;
  cartData: Cart;
  itemInCart:Cart;
  flag:Number

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute, private productService: ProductService, private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.productID = data.id;
    })

    this.productService.viewProduct(this.productID).subscribe(val => {
      this.productData = val;
     
    })
    this.addingItem()
  }

  addingItem()
  {
    this.cartService.findItemInCart(this.productID).subscribe(data=>{
      this.itemInCart = data;
    
      if(this.itemInCart.productId>0)
      {
        alert('Oops! Item Already In cart');
      }
      else
      {
          let obj =
          {
            productId: this.productData.productId,
            quantity: this.productData.quantity,
            status: "in cart only",
            email: "gs@gmail.com"
          };
    
          this.cartService.addToCart(obj).subscribe(data => {
            console.log("Subscribed:", data);
          })
          alert("Item added successfully!"); 
      }      
    })

  }

}
