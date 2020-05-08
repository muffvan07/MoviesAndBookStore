import { Movie } from "../_models/movie";
import { Cast } from "../_models/cast";
import { Injectable } from "@angular/core";
import { CartService } from "./cart.service";
import { map } from "rxjs/internal/operators/map";
import { Observable, of } from "rxjs";

@Injectable()
export class MoviesService {
  private movies: Movie[] = [
    new Movie(
      1,
      "Mission Impossible : 4",
      2015,
      "Action",
      1500,
      "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg",
      15,
      "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.",
      "https://www.youtube.com/watch?v=EDGYVFZxsXQ",
      3.0,
      "Brad Bird",
      [
        new Cast("Tom Cruise", "Ethen Hunt"),
        new Cast("Paula Patton", "Jane"),
        new Cast("Simon Pegg", "Benji"),
      ]
    ),
    new Movie(
      2,
      "Extraction",
      2020,
      "Action",
      2599,
      "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      7,
      "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
      "https://www.youtube.com/watch?v=GJQsT-h0FTU",
      6.8,
      "Sam Hargrave",
      [
        new Cast("Chris Hemsworth", "Tyler Rake"),
        new Cast("Rudhraksh Jaiswal", "Ovi Mahajan"),
        new Cast("Randeep Hooda", "Saju"),
        new Cast("Pankaj Tripathi", "	Ovi Mahajan Sr."),
      ]
    ),
    new Movie(
      3,
      "Bad Boys For Life",
      2020,
      "Action, Comedy, Crime",
      7899,
      "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg",
      41,
      "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.",
      "https://www.youtube.com/watch?v=jKCj3XuPG8M",
      6.7,
      "Adil El Arbi, Bilall Fallah",
      [
        new Cast("Will Smith", "Mike"),
        new Cast("Martin Lawrence", "Marcus"),
        new Cast("Vanessa Hudgens", "Kelly"),
      ]
    ),
    new Movie(
      4,
      "The Dark Knight",
      2008,
      " Action, Crime, Drama",
      699,
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg",
      24,
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      9.0,
      "Christopher Nolan",
      [
        new Cast("Christian Bale", "Bruce Wayne"),
        new Cast("Heath Ledger", "Joker"),
        new Cast("Aaron Eckhart", "Harvey Dent"),
        new Cast("Michael Caine", "Alfred"),
        new Cast("Gary Oldman", "Gordon"),
      ]
    ),
    new Movie(
      5,
      "The Dark Knight",
      2008,
      " Action, Crime, Drama",
      699,
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg",
      24,
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      9.0,
      "Christopher Nolan",
      [
        new Cast("Christian Bale", "Bruce Wayne"),
        new Cast("Heath Ledger", "Joker"),
        new Cast("Aaron Eckhart", "Harvey Dent"),
        new Cast("Michael Caine", "Alfred"),
        new Cast("Gary Oldman", "Gordon"),
      ]
    ),
  ];

  constructor(private cartService: CartService) {}

  getMovies(): Observable<Movie[]> {
    return of(this.movies.slice());
  }

  getMovie(index: number | string) {
    return this.getMovies().pipe(
      map((movies: Movie[]) => movies.find((movie) => movie.id === +index))
    );
  }
}
