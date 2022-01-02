import { CustomerService } from './../../services/customer.service';
import { Customer } from './../../@core/types/customer';
import { Component, OnInit } from '@angular/core';
import { CustomersDb } from 'src/fakedb/customersDb';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit  {
  // customers: Customer[] = [];
   customer: Customer;
  // constructor(private customerService: CustomerService,
  //   private modalService: NgbModal) {}

   ngOnInit(): void {
     this.refreshCustomers();
   }

    getCustomer() {
      this.customers = CustomersDb;
    }

   deleteCustomer(customer: Customer) {
     this.customerService.remove(customer);
     this.refreshCustomers();
     this.collectionSize = CustomersDb.length
   }

   modalOpen(modalBasic:any, customerId:any) {
     let customer = this.customers.find(c => c.id === customerId)
     this.customer = customer!;
     this.modalService.open(modalBasic,{
       windowClass: 'modal',
     });
   }

  page = 1;
  pageSize = 4;
  collectionSize = CustomersDb.length;
  customers: Customer[];

  constructor(private customerService: CustomerService,
    private modalService: NgbModal ) {
  }

  refreshCustomers() {
    this.customers = CustomersDb
      .map((customer, i) => ({CustomerId: i+1,...customer}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  

}
