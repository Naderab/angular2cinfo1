import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  productUrl:string = environment.lien+"/products"
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.productUrl)
  }

  addProduct(p:Product){
    return this.http.post(this.productUrl,p)
  }

  deleteProduct(id:number){
    return this.http.delete(this.productUrl+"/"+id)
  }

  updateProduct(p:Product){
    return this.http.put(this.productUrl+"/"+p.id,p)
  }

  getById(id:number){
    return this.http.get<Product>(this.productUrl+"/"+id)

  }

}
