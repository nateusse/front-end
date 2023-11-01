import { Component } from '@angular/core';
import { products } from '../interface/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  /// copy the entire object in variable producst
  products = [...products];
 
  share() {
    window.alert('The product has been shared!');
  }
}
