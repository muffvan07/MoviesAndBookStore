import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CartService } from "src/app/_services/cart.service";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { Cart } from "src/app/_models/cart";
import { FormBuilder, Validators } from "@angular/forms";
import { CustomerService } from "src/app/_services/customer.service";
import { Customer } from "src/app/_models/customer";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {
  customer: Customer[];
  submitted = false;
  cartItems: Cart[];
  cartTotal = 0;
  quantity: number;
  shipping = 100;
  UserProfileForm;
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

    this.UserProfileForm = this.form.group({
      fullName: ["", Validators.required],
      email: ["", Validators.required],
      address: ["", Validators.required],
      state: ["", Validators.required],
      country: ["", Validators.required],
      zip: ["", Validators.required],
      username: ["", Validators.required],
      upi: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.customer = this.customerService.getCustomer();
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
  }

  onClear() {
    this.customerService.clearCust();
  }

  onOtpChange(otp) {
    this.otp = otp;
  }

  setVal(val) {
    this.ngOtpInput.setValue(val);
  }

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }

  verifyOtp() {
    if (this.otp === "778899") {
      alert("Your Order has been Placed Successfully!!");
      this.router.navigate(["/catalog"], { relativeTo: this.route });
    } else {
      alert("Invalid OTP!");
    }
  }
}
