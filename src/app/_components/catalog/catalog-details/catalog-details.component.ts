import { Component, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "src/app/_models/movie";
import { switchMap } from "rxjs/operators";
import { ParamMap, ActivatedRoute, Router } from "@angular/router";
import { MoviesService } from "src/app/_services/movies.service";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { Book } from "src/app/_models/book";
import { BooksService } from "src/app/_services/books.service";
import { CartService } from "src/app/_services/cart.service";
import { WishlistService } from "src/app/_services/wishlist.service";

@Component({
  selector: "app-catalog-details",
  templateUrl: "./catalog-details.component.html",
  styleUrls: ["./catalog-details.component.css"],
})
export class CatalogDetailsComponent implements OnInit {
  movie: Observable<Movie>;
  book: Observable<Book>;
  typeMovie: Boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService,
    private booksService: BooksService,
    private config: NgbRatingConfig,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.typeMovie = data.type === "Movie";
    });

    this.movie = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.moviesService.getMovie(params.get("id"))
      )
    );

    this.book = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.booksService.getBook(params.get("id"))
      )
    );
  }

  addToCart(item) {
    this.cartService.addToCart(item);
  }

  addToWishlist(item) {
    this.wishlistService.addToWishlist(item);
  }
}
