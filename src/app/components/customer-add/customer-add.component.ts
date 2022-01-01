import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Customer } from 'src/app/@core/types/customer';
import { CustomersDb } from 'src/fakedb/customersDb';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
  
  submit(){
      let customer:Customer = {
        id:this.getRandomId(4,100),
        name:this.firstFormGroup.value.name,
        surname:this.firstFormGroup.value.surname,
        email:this.secondFormGroup.value.email,
        phoneNumber:this.secondFormGroup.value.phoneNumber,
        image:'http://web.stanford.edu/group/cui_group/images/members/louisa.JPG'
      }
      CustomersDb.push(customer)
  }

  
   getRandomId(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
}
