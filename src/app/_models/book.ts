export class Book {
  public name: string;
  public releaseYear: number;
  public genre: string;
  public amount: number;
  public image: string;
  public quantity: number;
  public description: string;
  public preview: string;
  public writer: string;
  public goodreadsRatings: number;
  public pages: number;

  constructor(
    name: string,
    releaseYear: number,
    genre: string,
    amount: number,
    image: string,
    quantity: number,
    description: string,
    preview: string,
    writer: string,
    goodreadsRatings: number,
    pages: number
  ) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.amount = amount;
    this.image = image;
    this.quantity = quantity;
    this.description = description;
    this.preview = preview;
    this.writer = writer;
    this.goodreadsRatings = goodreadsRatings;
    this.pages = pages;
  }
}
