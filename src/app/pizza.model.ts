export class Pizza {
  name: string;
  price: number;
}

export class OrderItem {
  amount: number;
  pizza: Pizza;
}

export class Order {
  orderItems: OrderItem[];
  email: string;

  get orderTotal(): number {
    let total = 0;
    this.orderItems.forEach(orderItem => {
      total += orderItem.amount * orderItem.pizza.price;
    });
    return total;
  }
}

