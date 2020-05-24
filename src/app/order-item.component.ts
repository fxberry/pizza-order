import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderItem } from './pizza.model';

@Component({
  selector: 'app-order-item',
  templateUrl: 'order-item.component.html'
})

export class OrderItemComponent implements OnInit {
  @Input() orderItem: OrderItem;
  @Output() orderAmountChanged = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  amountChanged() {
    this.orderAmountChanged.emit(this.orderItem.amount);
  }


}
