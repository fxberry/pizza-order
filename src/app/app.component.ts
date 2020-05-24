import { Component } from '@angular/core';
import { Order } from './pizza.model';
import { BakeService } from './services/bake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-beschleuniger';

}

