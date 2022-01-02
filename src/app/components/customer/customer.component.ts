import { CustomerService } from './../../services/customer.service';
import { Customer } from './../../@core/types/customer';
import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from 'src/fakedb/customers';
import { CustomersDb } from 'src/fakedb/customersDb';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  customer: Customer;
  constructor(private customerService: CustomerService,
    private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.customers = CustomersDb;
  }

  deleteCustomer(customer: Customer) {
    this.customerService.remove(customer);
  }

  modalOpen(modalBasic:any, customerId:any) {
    let customer = this.customers.find(c => c.id === customerId)
    this.customer = customer!;
    this.modalService.open(modalBasic,{
      windowClass: 'modal',
    });
  }

  

}
