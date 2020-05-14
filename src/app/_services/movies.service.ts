import { Movie } from "../_models/movie";
import { Injectable } from "@angular/core";
import { map } from "rxjs/internal/operators/map";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

const apiUrl = "http://localhost:3000/movies";

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(apiUrl);
  }

  getMovie(index: number | string) {
    return this.getMovies().pipe(
      map((movies: Movie[]) => movies.find((movie) => movie.id === +index))
    );
  }
}
