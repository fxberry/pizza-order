import { Component } from '@angular/core';
import { BakeService } from './services/bake.service';
import { Order } from './pizza.model';

@Component({
  selector: 'app-order',
  templateUrl: 'order.component.html'
})

export class OrderComponent {

  order = new Order();

  constructor(private bakeService: BakeService) {
    this.order.email = 'mymail@gmail.com';
    this.order.orderItems = [
      { amount: 0, pizza: { name: 'Margaritha', price: 15 } },
      { amount: 1, pizza: { name: 'Prosciutto', price: 18 } },
      { amount: 2, pizza: { name: 'Hawaii', price: 20 } },
    ];
  }

  orderAmountChanged(newOrderAmount: number) {
    console.log('new order amount: ' + newOrderAmount);
  }

  submitOrder() {
    alert('Pizzas wurden bestellt an ' + this.order.email + '!');
    alert('Die Bestellung wird in ' +
              this.bakeService.calculateBakeTimeForOrder(this.order) +
              ' Minuten fertig gebachen sein');
  }
}
