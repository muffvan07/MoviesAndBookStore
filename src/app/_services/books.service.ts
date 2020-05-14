import { Book } from "../_models/book";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const apiUrl = "http://localhost:3000/books";

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(apiUrl);
  }

  getBook(index: number | string) {
    return this.getBooks().pipe(
      map((books: Book[]) => books.find((book) => book.id === +index))
    );
  }
}
