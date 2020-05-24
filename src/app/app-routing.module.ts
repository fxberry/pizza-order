import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { ContactComponent } from './contact.component';


const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/order', pathMatch: 'full' },
  { path: '**', component: OrderComponent }, // 404 Component or Redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
