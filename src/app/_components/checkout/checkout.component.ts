import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { CartService } from "src/app/_services/cart.service";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { Cart } from "src/app/_models/cart";
import { CustomerService } from "src/app/_services/customer.service";
import { Customer } from "src/app/_models/customer";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {
  customer: any[];
  submitted = false;
  cartItems: Cart[];
  cartTotal = 0;
  quantity: number;
  shipping = 100;
  otp: string;
  showOtpComponent = true;
  @ViewChild("ngOtpInput") ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: "",
    inputStyles: {
      width: "50px",
      height: "50px",
    },
  };

  constructor(
    private form: FormBuilder,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private rating: NgbRatingConfig
  ) {
    rating.max = 5;
    rating.readonly = true;
  }

  UserProfileForm = this.form.group({
    Name: ["", Validators.required],
    Email: ["", Validators.required],
    Address: ["", Validators.required],
    State: ["", Validators.required],
    Country: ["", Validators.required],
    Zipcode: ["", Validators.required],
    Username: ["", Validators.required],
    UpiId: ["", Validators.required],
  });

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.customer = this.customerService.getCustomer();
    console.log(this.customer);
  }

  ngDoCheck() {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.quantity * item.amount;
    });
  }

  onDelete(i) {
    this.cartService.deleteProduct(i);
  }

  clearCart() {
    this.cartItems = this.cartService.clearCart();
  }

  onSubmit(data) {
    this.customerService.addCustomer(this.UserProfileForm.value);
    this.router.navigate(["/cart/checkout/otpverify"]);
  }
}
