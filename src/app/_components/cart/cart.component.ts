import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/_services/cart.service";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute, Params } from "@angular/router";
import { Cart } from "src/app/_models/cart";
import { ToastrService } from "ngx-toastr";
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  animateChild,
  keyframes,
} from "@angular/animations";
import { TooltipPosition } from "@angular/material/tooltip";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
  animations: [
    // Trigger animation cards array
    trigger("cardAnimation", [
      // Transition from any state to any state
      transition("* => *", [
        // Initially the all cards are not visible
        query(":enter", style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(
          ":enter",
          stagger("300ms", [
            animate(
              ".5s ease-in",
              keyframes([
                style({ opacity: 0, transform: "translateY(-50%)", offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: "translateY(-10px) scale(1.1)",
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: "translateY(0)", offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class CartComponent implements OnInit {
  cartItems: Cart[];
  page = 1;
  pageSize = 4;
  cartTotal = 0;
  quantity: number;
  shipping: number;
  positionOptions: TooltipPosition[] = ["below", "above", "left", "right"];
  position = new FormControl(this.positionOptions[3]);

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
    console.log(this.cartItems);
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
