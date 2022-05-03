export function roundDouble(number: number, digits = 1) {
  const d = Math.pow(10, Math.abs(digits));

  return Math.round(number * d) / d;
}

export function add(number: string): string {
  const result = number
    .split(',')
    .map((n) => Number(n))
    .reduce((prev, curr) => prev + curr);

  return roundDouble(result).toString();
}
