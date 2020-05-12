import { Component, OnInit, OnDestroy } from "@angular/core";
import { Book } from "src/app/_models/book";
import { BooksService } from "src/app/_services/books.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Observable<Book[]>;
  page = 1;
  pageSize = 4;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  ngOnDestroy() {}
}
