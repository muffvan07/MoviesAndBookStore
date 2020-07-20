import { Component, OnInit, OnDestroy } from "@angular/core";
import { Movie } from "src/app/_models/movie";
import { MoviesService } from "src/app/_services/movies.service";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
} from "@angular/animations";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
  animations: [
    // Trigger animation cards array
    trigger("cardAnimation", [
      // Transition from any state to any state
      transition("* => *", [
        // Initially the all cards are not visible
        query(":enter", style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(
          ":enter",
          stagger("300ms", [
            animate(
              ".5s ease-in",
              keyframes([
                style({ opacity: 0, transform: "translateY(-50%)", offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: "translateY(-10px) scale(1.1)",
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: "translateY(0)", offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),

        // Cards will disappear sequentially with the delay of 300ms
        query(
          ":leave",
          stagger("300ms", [
            animate(
              "500ms ease-out",
              keyframes([
                style({ opacity: 1, transform: "scale(1.1)", offset: 0 }),
                style({ opacity: 0.5, transform: "scale(.5)", offset: 0.3 }),
                style({ opacity: 0, transform: "scale(0)", offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
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
