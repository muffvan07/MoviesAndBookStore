import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/_services/cart.service";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute, Params } from "@angular/router";
import { Cart } from "src/app/_models/cart";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  cartItems: Cart[];
  page = 1;
  pageSize = 4;
  cartTotal = 0;
  quantity: number;
  shipping: number;

  constructor(
    private cartService: CartService,
    private config: NgbRatingConfig,
    private toastr: ToastrService
  ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  ngDoCheck() {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.quantity * item.amount;
      if (this.cartTotal > 2000) {
        this.shipping = 0;
      } else {
        this.shipping = 100;
      }
    });
  }

  onDelete(i) {
    this.cartService.deleteProduct(i);
    this.toastr.info("Item removed from Cart");
  }

  clearCart() {
    this.cartItems = this.cartService.clearCart();
    this.toastr.info("Cart Cleared!");
  }
}
