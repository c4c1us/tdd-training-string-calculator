import { roundDouble } from './utils';

export class Calculator {
  public add(numbers: number[]) {
    return roundDouble(numbers.reduce((prev, value) => prev + value, 0));
  }
}
