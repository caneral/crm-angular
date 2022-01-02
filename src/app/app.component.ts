import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from 'src/fakedb/customers';
import { CustomersDb } from 'src/fakedb/customersDb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crm-angular';

    ngOnInit(): void {
      this.getCustomer()      
    }

  getCustomer() {
    if(CustomersDb.length<=0){
      CUSTOMERS.forEach((item) => {
        CustomersDb.push(item);
      });
    }
  }
}
