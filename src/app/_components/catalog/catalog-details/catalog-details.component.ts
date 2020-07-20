import { Component, OnInit } from "@angular/core";
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
import { Wishlist } from "src/app/_models/wishlist";
import { Cart } from "src/app/_models/cart";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-catalog-details",
  templateUrl: "./catalog-details.component.html",
  styleUrls: ["./catalog-details.component.css"],
})
export class CatalogDetailsComponent implements OnInit {
  movie: Observable<Movie>;
  book: Observable<Book>;
  typeMovie: Boolean;
  wishlistItem: Wishlist[];
  cartItem: Cart[];
  addedToWishlist: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService,
    private booksService: BooksService,
    private config: NgbRatingConfig,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    this.wishlistItem = this.wishlistService.getItems();
    this.cartItem = this.cartService.getItems();

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

  addToCartMovie(item: Movie) {
    try {
      let itemExist = false;

      for (let i in this.cartItem) {
        if (this.cartItem[i].name === item.name) {
          this.cartItem[i].quantity++;
          item.quantity--;
          itemExist = true;
          break;
        }
      }

      if (!itemExist) {
        item.quantity--;
        this.cartService.addToCart({
          name: item.name,
          releaseYear: item.releaseYear,
          genre: item.genre,
          amount: item.amount,
          image: item.image,
          quantity: 1,
          description: item.description,
          writer_director: item.director,
          type: item.type,
        });
      }
      this.toastr.success("Added to Cart! ");
    } catch (e) {
      this.toastr.error("Try adding the item again", "Major Error", {
        timeOut: 3000,
      });
    }
  }

  addToWishlistMovie(item: Movie) {
    let itemExist = false;

    for (let i in this.wishlistItem) {
      if (this.wishlistItem[i].name === item.name) {
        this.addedToWishlist = true;
        this.toastr.warning("Item is Already In Wishlist");
        itemExist = true;
        break;
      }
    }

    if (!itemExist) {
      this.wishlistService.addToWishList({
        id: item.id,
        name: item.name,
        releaseYear: item.releaseYear,
        genre: item.genre,
        amount: item.amount,
        image: item.image,
        quantity: item.quantity,
        description: item.description,
        writer_director: item.director,
        rating: item.rating,
        type: item.type,
      });
      this.addedToWishlist = true;
      this.toastr.info("Added to Wishlist");
    }
  }

  addToCartBook(item: Book) {
    try {
      let itemExist = false;

      for (let i in this.cartItem) {
        if (this.cartItem[i].name === item.name) {
          this.cartItem[i].quantity++;
          item.quantity--;
          itemExist = true;
          break;
        }
      }

      if (!itemExist) {
        item.quantity--;
        this.cartService.addToCart({
          name: item.name,
          releaseYear: item.releaseYear,
          genre: item.genre,
          amount: item.amount,
          image: item.image,
          quantity: 1,
          description: item.description,
          writer_director: item.writer,
          rating: item.goodreadsRatings,
          type: item.type,
        });
      }
      this.toastr.success("Added to Cart! ");
    } catch (e) {
      this.toastr.error("Try adding the item again", "Major Error", {
        timeOut: 3000,
      });
    }
  }

  addToWishlistBook(item: Book) {
    let itemExist = false;

    for (let i in this.wishlistItem) {
      if (this.wishlistItem[i].name === item.name) {
        this.addedToWishlist = true;
        this.toastr.warning("Item is Already In Wishlist");
        itemExist = true;
        break;
      }
    }

    if (!itemExist) {
      this.wishlistService.addToWishList({
        id: item.id,
        name: item.name,
        releaseYear: item.releaseYear,
        genre: item.genre,
        amount: item.amount,
        image: item.image,
        quantity: item.quantity,
        description: item.description,
        writer_director: item.writer,
        rating: item.goodreadsRatings,
        type: item.type,
      });
      this.addedToWishlist = true;
      this.toastr.info("Added to Wishlist");
    }
  }
}
