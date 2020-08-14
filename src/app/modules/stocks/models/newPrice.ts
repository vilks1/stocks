export interface NewPrice {
  newPrice: number;
  previousPrice: number;
  change: number;
}

export class NewPrice {
  constructor(
    public newPrice: number,
    public previousPrice: number,
    public change: number,
    ) { }
}
