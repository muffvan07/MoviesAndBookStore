import { Injectable } from "@angular/core";
import { Customer } from "../_models/customer";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  customer: Customer[] = [];

  constructor() {}

  addCustomer(customer) {
    this.customer.push(customer);
  }

  getCustomer() {
    return this.customer;
  }

  clearCust() {
    this.customer = [];
  }
}
