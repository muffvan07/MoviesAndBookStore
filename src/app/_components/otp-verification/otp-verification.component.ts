import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Customer } from "src/app/_models/customer";
import { CustomerService } from "src/app/_services/customer.service";
import { Cart } from "src/app/_models/cart";
import { CartService } from "src/app/_services/cart.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-otp-verification",
  templateUrl: "./otp-verification.component.html",
  styleUrls: ["./otp-verification.component.css"],
})
export class OtpVerificationComponent implements OnInit {
  customer: Customer[];
  cartItems: Cart[];
  cartTotal = 0;
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
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

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
      this.toastr.success("Your Order has been placed!", "Success!", {
        timeOut: 4000,
      });
      this.onClear();
      this.clearCart();
      this.router.navigate(["/"], { relativeTo: this.route });
    } else {
      this.toastr.error("Invalid OTP!");
    }
  }

  onClear() {
    this.customerService.clearCust();
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
