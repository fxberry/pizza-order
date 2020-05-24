import { Component } from '@angular/core';
import { BakeService } from './services/bake.service';
import { Order, OrderItem } from './pizza.model';

@Component({
  selector: 'app-order',
  templateUrl: 'order.component.html'
})

export class OrderComponent {

  order = new Order();

  constructor(private bakeService: BakeService) {
    this.order.email = 'mymail@gmail.com';
    this.order.orderItems = [];
  }

  orderAmountChanged(newOrderAmount: number) {
    console.log('new order amount: ' + newOrderAmount);
  }

  addOrderItem() {
    this.order.orderItems.push({ amount: 0, pizza: { name: '', price: 0 } });
  }

  submitOrder() {
    alert('Pizzas wurden bestellt an ' + this.order.email + '!');
    alert('Die Bestellung wird in ' +
              this.bakeService.calculateBakeTimeForOrder(this.order) +
              ' Minuten fertig gebachen sein');
  }
}
