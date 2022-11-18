import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product:Product = new Product();
  constructor(private x:ProductService,private r:Router) { }

  ngOnInit(): void {
  }

  Submit(){
    console.log(this.product)
    this.product.like = 0;
    this.x.addProduct(this.product)
    this.r.navigateByUrl('/products')
  }

}
