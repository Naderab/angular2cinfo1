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
  constructor() { 
  }

  ngOnInit(): void {
    this.products = [
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, picture: ""},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, picture: ""},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, picture: ""}, ]
  }

}
