import { Calculator } from './calculator';
import { Parser } from './parser';

function errorToStr(err: unknown) {
  if (err instanceof Error) return err?.message;

  return 'UnknownError';
}

export function add(number: string): string {
  const parser = new Parser(number);
  const calculator = new Calculator();

  try {
    const numbers = parser.parse();

    return calculator.add(numbers).toString();
  } catch (err) {
    // return handleError(err, number);
    return errorToStr(err);
  }
}
