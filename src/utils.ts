export function isEmpty(str: string) {
  return str === '';
}

export function escapeCharStr(str: string): string {
  try {
    const res = JSON.stringify(str);

    // Remove double quotes added by JSON.stringify()
    return res.slice(1, res.length - 1);
  } catch (err) {
    throw new Error('escapeCharStr failed');
  }
}

export function isNumber(str: string) {
  return !isEmpty(str.trim()) && !Number.isNaN(Number(str));
}

export function roundDouble(number: number, digits = 1) {
  const d = Math.pow(10, Math.abs(digits));

  return Math.round(number * d) / d;
}
