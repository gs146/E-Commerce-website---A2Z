import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId = 0;
  productDetails:Product;

  constructor(private activatedRoute: ActivatedRoute, 
    private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;
    })

    this.productService.viewProduct(this.productId).subscribe(productData=>{
      this.productDetails=productData;
      console.log(this.productDetails);
    })
  }
 
  updateProduct(form){
    const updateProd={
      id: this.productId,
      categoryId:Number(form.value.categoryId),
      name:form.value.productName,
      description:form.value.description,
      // rating:form.value.product_rating,
      price:Number(form.value.product_price),
      // productImg:'assets/sp.jpg',
      // review:form.value.product_reviews  
    };
    console.log(form);
    console.log("object made:", updateProd);
    this.productService.updateProduct(this.productId, updateProd).subscribe(data=>{
      console.log("subscrived",data)
    });
  }
  
}
