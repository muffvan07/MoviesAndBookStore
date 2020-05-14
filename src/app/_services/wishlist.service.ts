import { Subject } from "rxjs";
import { Movie } from "../_models/movie";

export class WishlistService {
  items = [];

  addToWishlist(item) {
    this.items.push(item);
  }

  getWishlistMovie() {
    return this.items;
  }

  addToCart(item) {
    this.items.push(item);
  }

  addToWishList(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  deleteProduct(index: number) {
    this.items.splice(index, 1);
  }

  clearWishlist() {
    this.items = [];
    return this.items;
  }
}
