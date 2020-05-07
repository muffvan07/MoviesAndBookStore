import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "src/app/_models/movie";
import { MoviesService } from "src/app/_services/movies.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { CartService } from "src/app/_services/cart.service";

@Component({
  selector: "app-movie-single",
  templateUrl: "./movie-single.component.html",
  styleUrls: ["./movie-single.component.css"],
})
export class MovieSingleComponent implements OnInit {
  @Input() movie: Movie;
  @Input() index: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(item) {
    this.cartService.addToCart(item);
  }
}
