import { Customer } from './../@core/types/customer';
import { Injectable } from '@angular/core';
import { CustomersDb } from 'src/fakedb/customersDb';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  remove(customer:Customer){
    let item = CustomersDb.find(c => c.id === customer.id);
    CustomersDb.splice(CustomersDb.indexOf(item!),1)
  }

  

}
