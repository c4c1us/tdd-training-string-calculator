export class NumberExpectedError extends Error {
  constructor(value: string, index: number) {
    super(`Number expected but '${value}' found at position ${index}.`);
  }
}
