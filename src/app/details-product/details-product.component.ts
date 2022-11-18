import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  product!:Product;
  constructor(private x:ProductService,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.product=this.x.getById(this.ac.snapshot.params?.['id']);
    console.log(this.ac.snapshot.params?.['id'])
  }

}
