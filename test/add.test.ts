import { add } from '../src/add';

describe('add() function', () => {
  it('should return "0" if param is an empty string', () => {
    expect(add('')).toBe('0');
  });

  it('should return "1" if param is "1"', () => {
    expect(add('1')).toBe('1');
  });

  it('should return "1,2" if param is "3"', () => {
    expect(add('1,2')).toBe('3');
  });

  it('should return "1.1,2.2" if param is "3.3"', () => {
    expect(add('1.1,2.2')).toBe('3.3');
  });

  it('should return "1.1,2.2,7,12.1" if param is "22.4"', () => {
    expect(add('1.1,2.2,7,12.1')).toBe('22.4');
  });
});
