import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productName: string = 'Apple Ipad Pro';
  productAvailability: string = 'In Stock';
  stockCount: number = 20;

  getStockCount() {
    return this.stockCount;
  }
  onUpdateProductStock(event: any) {
    this.stockCount = event.target.value;
  }
  constructor() {}

  ngOnInit(): void {}
}
