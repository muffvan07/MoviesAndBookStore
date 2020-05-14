import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/_models/movie";
import { CartService } from "src/app/_services/cart.service";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute, Params } from "@angular/router";
import { Book } from "src/app/_models/book";
import { Subscription } from "rxjs";
import { Cart } from "src/app/_models/cart";

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
  shipping = 100;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private config: NgbRatingConfig
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
    });
  }

  onDelete(i) {
    this.cartService.deleteProduct(i);
  }

  clearCart() {
    this.cartItems = this.cartService.clearCart();
  }
}
