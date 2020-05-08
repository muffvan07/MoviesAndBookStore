import { Movie } from "../_models/movie";
import { Cast } from "../_models/cast";
import { Subject, BehaviorSubject } from "rxjs";

export class CartService {
  moviesChanged = new Subject<Movie[]>();
  private totalItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private movies: Movie[] = [
    new Movie(
      1,
      "Mission Impossible : 4",
      2015,
      "Action",
      1500,
      "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg",
      0,
      "Amazing Movie",
      "https://www.youtube.com/watch?v=EDGYVFZxsXQ",
      4,
      "Brad Bird",
      [
        new Cast("Tom Cruise", "Ethen Hunt"),
        new Cast("Paula Patton", "Jane"),
        new Cast("Simon Pegg", "Benji"),
      ]
    ),
  ];

  addToCart(item) {
    this.movies.push(item);
  }

  getItems() {
    return this.movies;
  }
}
