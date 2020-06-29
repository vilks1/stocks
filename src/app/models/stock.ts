export interface Stock {
  symbol: string;
  name: string;
  price: number;
  initialPrice: number;
  previousPrice: number;
  change: number;
  absoluteChange: number;
}

export class Stock {
  constructor(
    public symbol: string,
    public name: string,
    public price: number,
    public initialPrice: number,
    public previousPrice: number,
    public percentageChange: number,
    public absoluteChange: number,
    ) { }
}
