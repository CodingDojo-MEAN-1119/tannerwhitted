import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { environment } from '../environments/environment';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [{
  path: '',
  children: [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'new',
    component: NewProductComponent
  },
  {
    path: 'list',
    component: ProductListComponent
  },
  {
    path: 'update/:id',
    component: UpdateProductComponent
  }
  ]
}];

@NgModule( {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
