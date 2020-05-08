import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "src/app/_models/movie";
import { switchMap } from "rxjs/operators";
import { ParamMap, ActivatedRoute, Router } from "@angular/router";
import { MoviesService } from "src/app/_services/movies.service";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-catalog-details",
  templateUrl: "./catalog-details.component.html",
  styleUrls: ["./catalog-details.component.css"],
})
export class CatalogDetailsComponent implements OnInit {
  movie: Observable<Movie>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService,
    private config: NgbRatingConfig
  ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this.movie = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.moviesService.getMovie(params.get("id"))
      )
    );
  }

  gotoHeroes(movie: Movie) {
    let movieId = movie ? movie.id : null;
    this.router.navigate(["/catalogDetail", { id: movieId, foo: "foo" }]);
  }
}
