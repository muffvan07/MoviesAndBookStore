export class Cart {
  public id: number;
  public type: string;
  public name: string;
  public releaseYear: number;
  public genre: string;
  public amount: number;
  public image: string;
  public quantity: number;
  public writer_director: string;
  public rating: number;
  public description: string;

  constructor(
    id: number,
    type: string,
    name: string,
    releaseYear: number,
    genre: string,
    amount: number,
    image: string,
    quantity: number,
    rating: number,
    writer_director: string,
    description: string
  ) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.amount = amount;
    this.image = image;
    this.quantity = quantity;
    this.rating = rating;
    this.writer_director = writer_director;
    this.description = description;
  }
}
