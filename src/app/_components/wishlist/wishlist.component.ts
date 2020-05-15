import { Component, OnInit, Type } from "@angular/core";
import { Movie } from "src/app/_models/movie";
import { WishlistService } from "src/app/_services/wishlist.service";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { CartService } from "src/app/_services/cart.service";
import { Wishlist } from "src/app/_models/wishlist";
import { Cart } from "src/app/_models/cart";

@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.css"],
})
export class WishlistComponent implements OnInit {
  wishlistItems: Wishlist[];
  cartItem: Cart[];
  page = 1;
  pageSize = 4;

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
    private config: NgbRatingConfig
  ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.wishlistItems = JSON.parse(localStorage.getItem("item"));
  }

  addToCart(item: Movie) {
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
        rating: item.rating,
        type: item.type,
      });
    }
  }

  onDelete(i) {
    this.wishlistService.deleteProduct();
  }

  clearWishlistt() {
    this.wishlistItems = this.wishlistService.clearWishlist();
  }

  clearWishlist() {
    this.wishlistItems = this.wishlistService.clearWishlist();
  }
}
