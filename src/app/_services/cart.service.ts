import { Movie } from "../_models/movie";
import { Subject } from "rxjs";

export class CartService {
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
      "https://www.youtube.com/watch?v=EDGYVFZxsXQ",
      4,
      "Brad Bird",
      "Tom Cruise,Paula Patton,Simon Pegg"
    ),
  ];

  addToCart(item) {
    this.movies.push(item);
  }

  getItems() {
    return this.movies;
  }

  getItem(index: number) {
    return this.movies[index];
  }

  deleteProduct(index: number) {
    this.movies.splice(index, 1);
  }
}
