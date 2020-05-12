import { Movie } from "../_models/movie";
import { Injectable } from "@angular/core";
import { map } from "rxjs/internal/operators/map";
import { Observable, of } from "rxjs";

@Injectable()
export class MoviesService {
  private movies: Movie[] = [
    new Movie(
      1,
      "Movie",
      "Mission Impossible : 4",
      2015,
      "Action",
      1500,
      "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg",
      15,
      "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.",
      "https://www.youtube.com/embed/EDGYVFZxsXQ",
      3.0,
      "Brad Bird",
      "Tom Cruise,Paula Patton,Simon Pegg"
    ),
    new Movie(
      2,
      "Movie",
      "Extraction",
      2020,
      "Action",
      2599,
      "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      7,
      "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
      "https://www.youtube.com/embed/GJQsT-h0FTU",
      6.8,
      "Sam Hargrave",
      "Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda, Pankaj Tripathi"
    ),
    new Movie(
      3,
      "Movie",
      "Bad Boys For Life",
      2020,
      "Action, Comedy, Crime",
      7899,
      "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg",
      41,
      "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.",
      "https://www.youtube.com/embed/jKCj3XuPG8M",
      6.7,
      "Adil El Arbi, Bilall Fallah",
      "Will Smith,Martin Lawrence,Vanessa Hudgens"
    ),
    new Movie(
      4,
      "Movie",
      "The Dark Knight",
      2008,
      " Action, Crime, Drama",
      699,
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg",
      24,
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "https://www.youtube.com/embed/EXeTwQWrcwY",
      9.0,
      "Christopher Nolan",
      "Christian Bale,Heath Ledger,Aaron Eckhart,Michael Caine,Gary Oldman"
    ),
    new Movie(
      5,
      "Movie",
      "The Dark Knight",
      2008,
      " Action, Crime, Drama",
      699,
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg",
      24,
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "https://www.youtube.com/embed/EXeTwQWrcwY",
      9.0,
      "Christopher Nolan",
      "Christian Bale,Heath Ledger,Aaron Eckhart,Michael Caine,Gary Oldman"
    ),
  ];

  constructor() {}

  getMovies(): Observable<Movie[]> {
    return of(this.movies.slice());
  }

  getMovie(index: number | string) {
    return this.getMovies().pipe(
      map((movies: Movie[]) => movies.find((movie) => movie.id === +index))
    );
  }
}
