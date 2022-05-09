import { add } from '../src/add';

describe('add() function', () => {
  it('should return "0" if number is an empty string', () => {
    expect(add('')).toBe('0');
  });

  it('should return "1" if number is "1"', () => {
    expect(add('1')).toBe('1');
  });

  it('should return "1,2" if number is "3"', () => {
    expect(add('1,2')).toBe('3');
  });

  it('should return "1.1,2.2" if number is "3.3"', () => {
    expect(add('1.1,2.2')).toBe('3.3');
  });

  it('should return "1.1,2.2,7,12.1" if number is "22.4"', () => {
    expect(add('1.1,2.2,7,12.1')).toBe('22.4');
  });

  it('should return "6" if number is "1\\n2,3"', () => {
    expect(add('1\n2,3')).toBe('6');
  });

  it('should return "Number expected but \'\\n\' found at position 6." if number is "175.2,\\n35"', () => {
    expect(add('175.2,\n35')).toBe("Number expected but '\\n' found at position 6.");
  });
});
