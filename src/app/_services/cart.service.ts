import { Movie } from "../_models/movie";

export class CartService {
  private items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getItem(index: number) {
    return this.items[index];
  }

  deleteProduct(index: number) {
    this.items.splice(index, 1);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
