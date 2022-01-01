import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  {
    path:'',
    component:CustomerComponent,
  },
  {
    path:'customers',
    component:CustomerAddComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
