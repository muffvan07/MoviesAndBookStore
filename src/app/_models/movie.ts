import { Cast } from "./cast";

export class Movie {
  public name: string;
  public releaseYear: number;
  public genre: string;
  public amount: number;
  public image: string;
  public quantity: number;
  public description: string;
  public trailer: string;
  public rating: number;
  public director: string;
  public cast: Cast[];

  constructor(
    name: string,
    releaseYear: number,
    genre: string,
    amount: number,
    image: string,
    quantity: number,
    description: string,
    trailer: string,
    rating: number,
    director: string,
    cast: Cast[]
  ) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.amount = amount;
    this.image = image;
    this.quantity = quantity;
    this.description = description;
    this.trailer = trailer;
    this.rating = rating;
    this.director = director;
    this.cast = cast;
  }
}
