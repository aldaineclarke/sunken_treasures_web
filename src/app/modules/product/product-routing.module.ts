import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListingComponent } from './pages/product-listing/product-listing.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', 
    component: ProductComponent,
    children: [
      {path: '', component: ProductListingComponent},
      {path: 'details/:id', component: ProductDetailComponent}
    ], 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
