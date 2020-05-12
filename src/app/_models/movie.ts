export class Movie {
  public id: number;
  public type: string;
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
  public cast: string;

  constructor(
    id: number,
    type: string,
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
    cast: string
  ) {
    this.id = id;
    this.type = type;
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
