import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  productList:Product
  count=0

  constructor(public router: Router, public route: ActivatedRoute, private productService: ProductService){}

  ngOnInit(): void {
    let searchQuery = localStorage.getItem("search");

    this.productService.searchProduct(searchQuery).subscribe(data=>{
      this.productList=data;
      for(let item in this.productList) this.count++;
    })
    localStorage.removeItem("search");
    
  }
 
}
