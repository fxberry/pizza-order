import { Injectable } from '@angular/core';
import { Order } from '../pizza.model';

@Injectable()
export class BakeService {
  constructor() { }

  public calculateBakeTimeForOrder(pizzaOrder: Order) {
    let orderedTotalPizzas = 0;

    pizzaOrder.orderItems.forEach(element => {
      orderedTotalPizzas += element.amount;
    });

    return orderedTotalPizzas * 5;
  }

}
