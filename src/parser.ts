import { NumberExpectedError } from './errors';
import { isEmpty, escapeCharStr, isNumber } from './utils';

export class Parser {
  private static readonly SEPARATOR_REGEX = /[,\n]/;
  private _input: string;

  constructor(input: string) {
    this._input = input;
  }

  public get input() {
    return this._input;
  }

  public parse(): number[] {
    const values = this.extractValues(this.input);

    return this.parseValues(values);
  }

  private extractValues(str: string) {
    return str.split(Parser.SEPARATOR_REGEX);
  }

  private parseValues(values: string[]): number[] {
    if (values.length === 1) {
      return this.parseOneValue(values[0]);
    }

    return this.parseManyValue(values);
  }

  private parseOneValue(value: string): number[] {
    if (isEmpty(value)) {
      return [0];
    }

    const res = this.parseValue(value, 0, [value]);

    return [res];
  }

  private parseManyValue(values: string[]) {
    return values.map(this.parseValue.bind(this));
  }

  private parseValue(value: string, index: number, values: string[]): number {
    if (!isNumber(value)) {
      const [invalidChar, invalidIndex] = this.getInputInvalidChar(values, index);

      throw new NumberExpectedError(invalidChar, invalidIndex);
    }

    return Number(value);
  }

  private getInputInvalidChar(array: string[], index: number): [string, number] {
    const invalidCharIndex = this.getInputIndexFromValues(array, index);

    try {
      const invalidChar = escapeCharStr(this.input[invalidCharIndex]);

      return [invalidChar, invalidCharIndex];
    } catch (_) {
      return ['UNKNOWN_CHAR', invalidCharIndex];
    }
  }

  private getInputIndexFromValues(array: string[], index: number) {
    return array.slice(0, index).reduce((p, v) => p + v).length + index;
  }
}
