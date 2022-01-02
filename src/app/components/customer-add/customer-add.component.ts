import Swal from 'sweetalert2';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/@core/types/customer';
import { CustomersDb } from 'src/fakedb/customersDb';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
})
export class CustomerAddComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router:Router) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      surname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    });
    this.secondFormGroup = this._formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.maxLength(50)]],
      email: ['', [Validators.email, Validators.required]],
    });
  }

  submit() {
    let customer: Customer = {
      id: CustomersDb.length + 1,
      name: this.firstFormGroup.value.name,
      surname: this.firstFormGroup.value.surname,
      email: this.secondFormGroup.value.email,
      phoneNumber: this.secondFormGroup.value.phoneNumber,
      image:
        'http://web.stanford.edu/group/cui_group/images/members/louisa.JPG',
    };
    CustomersDb.push(customer);
    return true;
  }

  getRandomId(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 
  confirmBox(){
    Swal.fire({
      title: 'Do you approve the transaction?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      cancelButtonText: 'No'
    }).then((result) => {
      console.log("Result:",result)
      if (result.value) {
        if(this.submit()){
          Swal.fire(
            'Added!',
            'The client has been successfully added.',
            'success'
          ).then(result => {
            this.router.navigate(['']);
          })
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Adding customer has been cancelled.',
          'error'
        )
      }
    })
  }

}
