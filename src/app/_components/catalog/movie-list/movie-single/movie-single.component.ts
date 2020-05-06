import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "src/app/_models/movie";

@Component({
  selector: "app-movie-single",
  templateUrl: "./movie-single.component.html",
  styleUrls: ["./movie-single.component.css"],
})
export class MovieSingleComponent implements OnInit {
  @Input() movie: Movie;
  @Input() index: number;

  ngOnInit(): void {}
}
