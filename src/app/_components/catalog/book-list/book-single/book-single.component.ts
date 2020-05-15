import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/app/_models/book";
import { CartService } from "src/app/_services/cart.service";
import { WishlistService } from "src/app/_services/wishlist.service";
import { MoviesService } from "src/app/_services/movies.service";
import { Movie } from "src/app/_models/movie";
import { Cart } from "src/app/_models/cart";
import { BooksService } from "src/app/_services/books.service";
import { Wishlist } from "src/app/_models/wishlist";

@Component({
  selector: "app-book-single",
  templateUrl: "./book-single.component.html",
  styleUrls: ["./book-single.component.css"],
})
export class BookSingleComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  addedToWishlist: boolean;
  cartItem: Cart[];
  wishlistItem: Wishlist[];

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.cartItem = this.cartService.getItems();
  }

  addToCart(item: Book) {
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
  }

  addToWishlist(item: Book) {
    let itemExist = false;

    for (let i in this.wishlistItem) {
      if (this.wishlistItem[i].name === item.name) {
        this.addedToWishlist = true;
        alert("Item is Already In Wishlist");
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
    }
  }
}
