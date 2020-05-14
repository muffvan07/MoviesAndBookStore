export class Customer {
  public id: number;
  public Name: string;
  public Email: string;
  public Address: string;
  public State: string;
  public Zipcode: number;
  public Country: string;
  public UpiId: number;

  constructor(
    id: number,
    Name: string,
    Email: string,
    Address: string,
    State: string,
    Zipcode: number,
    Country: string,
    UpiId: number
  ) {
    this.id = id;
    this.Name = Name;
    this.Email = Email;
    this.Address = Address;
    this.State = State;
    this.Zipcode = Zipcode;
    this.Country = Country;
    this.UpiId = UpiId;
  }
}
