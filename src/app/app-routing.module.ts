import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './form-product/form-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { TodolistComponent } from './todolist/todolist.component';
import { XComponent } from './x/x.component';

const routes: Routes = [
  {path:'products',component: ProductsComponent},
  {path:'addProduct',component: FormProductComponent},
  {path:'product/:id',component: DetailsProductComponent},
  {path:'Todoroot',component: TodolistComponent},
  {path:'updateProduct/:id',component: FormProductComponent},
  {path:'x',component: XComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
