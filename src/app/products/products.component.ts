import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title : string = "Welcome to products page"
  products : Product[] =[]
  search:string=''
  constructor() { 
  }

  ngOnInit(): void {
    this.products = [
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, picture: "https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395",like:0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, picture: "https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395",like:0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, picture: "https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395",like:0}, ]
  }

  BuyProduct(id:number){
    for(let i=0;i<this.products.length;i++){
      if(this.products[i].id == id) {
        this.products[i].quantity--
      }
    }
  }
  LikeProduct(yyyy:number){
    this.products.map((x)=>x.id == yyyy && x.like++)
  }

  searchProduct(){
    this.products = this.products.filter((product)=>product.title.match(this.search));
  }

}
