import { Component, OnInit, OnDestroy } from "@angular/core";
import { Movie } from "src/app/_models/movie";
import { MoviesService } from "src/app/_services/movies.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent implements OnInit, OnDestroy {
  page = 1;
  pageSize = 8;

  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  ngOnDestroy() {}
}
