import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  quantity = 1;

  minus(){
    this.quantity = this.quantity <= 1 ? 1 : this.quantity - 1;
  }
  plus(){
    this.quantity = this.quantity > 10 ? 10 : this.quantity + 1;
  }
}
