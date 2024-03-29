import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrderItem, Pizza } from './pizza.model';

@Component({
  selector: 'app-order-item',
  templateUrl: 'order-item.component.html'
})

export class OrderItemComponent {
  @Input() orderItem: OrderItem;
  @Output() orderAmountChanged = new EventEmitter();

  availablePizzas: Pizza[] = [
    { name: 'Margaritha', price: 15 } ,
    { name: 'Prosciutto', price: 18 } ,
    { name: 'Hawaii', price: 20 } ];

  constructor() { }

  amountChanged() {
    this.orderAmountChanged.emit(this.orderItem.amount);
  }


}
