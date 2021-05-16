import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery:string
  
  constructor(private router:Router) { }
  
  ngOnInit(): void {
  }

  log(x){
    console.log("Asa",x.value)
  }
  onSubmit(search)
  {
    console.log("Search this:",search.value)
    this.searchQuery = search.value;

    localStorage.setItem("search",this.searchQuery);
    console.log("routing......");

    this.router.navigate(['products/search']);
  }

  


 
}
 