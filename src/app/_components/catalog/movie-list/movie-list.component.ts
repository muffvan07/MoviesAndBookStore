import { Component, OnInit, OnDestroy } from "@angular/core";
import { Movie } from "src/app/_models/movie";
import { MoviesService } from "src/app/_services/movies.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[];
  page = 1;
  pageSize = 4;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
  }

  ngOnDestroy() {}
}
