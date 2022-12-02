import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../core/product";
import { BackService } from "../services/back.service";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-form-product",
  templateUrl: "./form-product.component.html",
  styleUrls: ["./form-product.component.css"],
})
export class FormProductComponent implements OnInit {
  product: Product = new Product();
  id!:number;
  constructor(
    private x: ProductService,
    private r: Router,
    private _productService: BackService,
    private _activated:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id=this._activated.snapshot.params['id'];
    this._productService.getById(this.id).subscribe((data)=>this.product = data)
  }

  Submit() {
    console.log(this.product);
   
   if(this.id!=null){
      this._productService.updateProduct(this.product).subscribe(()=>this.r.navigateByUrl("/products"))
   } else {
    this.product.like = 0;
    //this.x.addProduct(this.product)
    this._productService.addProduct(this.product).subscribe(()=> this.r.navigateByUrl("/products"))
   }
  }
}
