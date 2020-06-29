import { NewPrice } from '../models/newPrice';

export class PriceCalculator {
  private priceChangeLimits: Array<number> = [-10, 10];

  private static round(value: number, n: number): number {
    return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
  }

  public getRecalculatedPrice(price: number): NewPrice {
    const randomChange: number = Math.random() * (this.priceChangeLimits[1] - this.priceChangeLimits[0] + 1) + this.priceChangeLimits[0];
    const roundedChange: number = PriceCalculator.round(randomChange, 2);
    const changeInPrice: number = price * roundedChange / 100;
    return new NewPrice(PriceCalculator.round(price + changeInPrice, 2), price, roundedChange);
  }
}
