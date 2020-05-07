import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Movie } from "src/app/_models/movie";
import { CartService } from "src/app/_services/cart.service";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  movies: Movie[];
  page = 1;
  pageSize = 2;

  constructor(
    private cartService: CartService,
    private config: NgbRatingConfig
  ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.movies = this.cartService.getItems();
  }
}
