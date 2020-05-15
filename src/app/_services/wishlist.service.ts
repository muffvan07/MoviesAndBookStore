import { Book } from "../_models/book";

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
    localStorage.setItem("item", JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }

  deleteProduct() {
    const index = this.items.indexOf("item");
    this.items.splice(index, 1);
    localStorage.setItem("item", JSON.stringify(this.items));
  }

  clearWishlist() {
    this.items = [];
    localStorage.removeItem("item");
    return this.items;
  }
}
