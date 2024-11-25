import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      image: 'assets/images/products/product1.jpg',
      description: 'Product description here'
    },
    // Add more products
  ];
}
