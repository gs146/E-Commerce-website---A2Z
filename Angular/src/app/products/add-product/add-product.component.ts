import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
ProductList:Product
LastProdId=0;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.viewAllProduct().subscribe(data=>{
      this.ProductList = data;
      var cnt=0;
    for(let item in this.ProductList)
      cnt+=1;  
    this.LastProdId =this.ProductList[cnt-1].productId;
      })
  }

  addNewProduct(form){
    // console.log(form.value);

    let newProduct ={
      productId:this.LastProdId+1,
      name:form.value.product_name,
      categoryId:Number(form.value.product_category),
      description:form.value.product_description,
      quantity:10,
      price:Number(form.value.product_price)
    };
    //console.log(newProduct);
    this.productService.createProduct(newProduct).subscribe(data=>{
    })
        
  }
} 