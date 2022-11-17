import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product:Product = new Product();
  constructor() { }

  ngOnInit(): void {
  }

  Submit(){
    console.log(this.product)
  }

}
