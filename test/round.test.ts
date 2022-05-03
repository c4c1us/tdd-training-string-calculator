import { roundDouble } from '../src/add';

describe('roundDouble() function', () => {
  it('should return 1.1 if number is 1.1', () => {
    expect(roundDouble(1.1)).toBe(1.1);
  });

  it('should return 1.1 if number is 1.109', () => {
    expect(roundDouble(1.109)).toBe(1.1);
  });

  it('should return 1.11 if number is 1.109 and digits is 2', () => {
    expect(roundDouble(1.109, 2)).toBe(1.11);
  });

  it('should return 1.109 if number is 1.109 and digits is 3', () => {
    expect(roundDouble(1.109, 3)).toBe(1.109);
  });
});
