import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/_models/movie";
import { WishlistService } from "src/app/_services/wishlist.service";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { CartService } from "src/app/_services/cart.service";

@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.css"],
})
export class WishlistComponent implements OnInit {
  movies: Movie[];
  page = 1;
  pageSize = 4;
  cartCount: number = 1;
  itemAmount: number = 4;
  id: number;

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
    private config: NgbRatingConfig
  ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.movies = this.wishlistService.getItems();
  }

  addToCart(item) {
    this.cartService.addToCart(item);
  }
}
