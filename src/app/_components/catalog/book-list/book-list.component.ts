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
  books: Book[] = [];
  page = 1;
  pageSize = 8;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  ngOnDestroy() {}
}
