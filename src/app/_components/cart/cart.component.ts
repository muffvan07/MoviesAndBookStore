import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/_models/movie";
import { CartService } from "src/app/_services/cart.service";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute } from "@angular/router";
import { Book } from "src/app/_models/book";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  movies: Movie[];
  books: Book[];
  page = 1;
  pageSize = 4;
  cartCount: number = 1;
  itemAmount: number = 4;
  id: number;
  typeMovie: Boolean;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private config: NgbRatingConfig
  ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.movies = this.cartService.getItems();
    this.route.data.subscribe((data) => {
      this.typeMovie = data.type === "Movie";
    });
  }
}
