import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/app/_models/book";
import { CartService } from "src/app/_services/cart.service";

@Component({
  selector: "app-book-single",
  templateUrl: "./book-single.component.html",
  styleUrls: ["./book-single.component.css"],
})
export class BookSingleComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(item) {
    this.cartService.addToCart(item);
  }
}
