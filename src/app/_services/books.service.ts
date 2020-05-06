import { Book } from "../_models/book";

export class BooksService {
  private books: Book[] = [
    new Book(
      "The Adventures of Sherlock Holmes",
      1892,
      "Mystery, Thriller",
      1259,
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Adventures_of_sherlock_holmes.jpg",
      21,
      "A delight for a public which enjoys incident, mystery, and above all that matching of the wits of a clever man against the dumb resistance of the secrecy of inanimate things, which results in the triumph of the human intelligence.",
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/Adventures-of-Sherlock-Holmes-December-1930.jpg",
      "Arthur Conan Doyle",
      7.0,
      236
    ),
    new Book(
      "Treasure Island",
      1883,
      "Action, Adventure",
      599,
      "https://images-na.ssl-images-amazon.com/images/I/51IxNnUVpqL._SX331_BO1,204,203,200_.jpg",
      15,
      "Treasure Island is an adventure novel by Scottish author Robert Louis Stevenson, narrating a tale of buccaneers and buried gold.",
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/Treasure-island-map.jpg",
      "Robert Louis Stevenson",
      8.0,
      194
    ),
    new Book(
      "Alice in Wonderland",
      1865,
      "Fantasy",
      299,
      "https://www.gutenberg.org/files/11/11-h/images/cover.jpg",
      9,
      "Alice's Adventures in Wonderland is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a young girl named Alice falling through a rabbit hole into a subterranean fantasy world populated by peculiar, anthropomorphic creatures. ",
      "https://i.guim.co.uk/img/media/ffb2da32fa930f2bd17b8200e70d08220b12b811/0_0_2994_4000/master/2994.jpg?width=380&quality=45&auto=format&fit=max&dpr=2&s=dfbd97d813aa7d0e2cc999a57955a025",
      "Lewis Carroll",
      5.0,
      78
    ),
    new Book(
      "The Handmaid's Tale",
      1998,
      "Mystery",
      1599,
      "https://images-na.ssl-images-amazon.com/images/I/71xL8U55tYL.jpg",
      15,
      "Offred is a Handmaid in the Republic of Gilead. She may leave the home of the Commander and his wife once a day to walk to food markets whose signs are now pictures instead of words because women are no longer allowed to read",
      "https://am24.mediaite.com/tms/cnt/uploads/2019/03/Page-21-from-Atwo_9780385539241_8p_01_r1-7-793x1200.jpg",
      "Margaret Atwood",
      5.0,
      325
    ),
  ];

  getBooks() {
    return this.books.slice();
  }

  getBook(index: number) {
    return this.books.slice()[index];
  }
}
