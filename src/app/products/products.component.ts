import { Component, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { timingSafeEqual } from "crypto";
import { Product } from "../core/product";
import { ProductService } from "../services/product.service";
import { CalculService } from "../services/calcul.service";
import { BackService } from "../services/back.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  title: string = "Welcome to products page";
  products: Product[] = [];
  search: string = "";
  constructor(
    private pService: ProductService,
    private t: CalculService,
    private back: BackService
  ) {}

  ngOnInit(): void {
    //this.products = this.pService.products;
    this.back.getProducts().subscribe((d) => (this.products = d));
  }

  BuyProduct(p:Product) {
    p.quantity--;
   this.back.updateProduct(p).subscribe((data)=>console.log(data))
  }
  LikeProduct(p:Product) {
    p.like++;
    this.back.updateProduct(p).subscribe((data)=>console.log(data))

  }

  searchProduct() {
    this.products = this.products.filter((product) =>
      product.title.match(this.search)
    );
  }
  Res!: number;
  FunctionBilan() {
    this.Res = this.t.getNumberOf(this.products, "quantity", 0);
  }
  deleteProduct(id: number) {
    this.back.deleteProduct(id).subscribe(()=>(this.products=this.products.filter((p)=>p.id != id)))
  }
}
