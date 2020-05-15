export class Customer {
  public Username: string;
  public Name: string;
  public Email: string;
  public Address: string;
  public State: string;
  public Zipcode: number;
  public Country: string;
  public UpiId: string;

  constructor(
    Username: string,
    Name: string,
    Email: string,
    Address: string,
    State: string,
    Zipcode: number,
    Country: string,
    UpiId: string
  ) {
    this.Username = Username;
    this.Name = Name;
    this.Email = Email;
    this.Address = Address;
    this.State = State;
    this.Zipcode = Zipcode;
    this.Country = Country;
    this.UpiId = UpiId;
  }
}
