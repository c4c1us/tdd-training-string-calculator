import { escapeCharStr, isEmpty, roundDouble, isNumber } from '../src/utils';

describe('testing utils', () => {
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

  describe('escapeCharStr() function', () => {
    it('should return "a\\nb" if string is "\\n"', () => {
      expect(escapeCharStr('a\nb')).toBe('a\\nb');
    });
  });

  describe('isEmpty() function', () => {
    it('should return true if string is empty', () => {
      expect(isEmpty('')).toBe(true);
    });

    it('should return false if string is not empty', () => {
      expect(isEmpty('s')).toBe(false);
    });
  });

  describe('isNumber() function', () => {
    it('should return false if string is empty', () => {
      expect(isNumber('')).toBe(false);
    });

    it('should return false if string is "12er"', () => {
      expect(isNumber('12er')).toBe(false);
    });

    it('should return true if string is "12"', () => {
      expect(isNumber('12')).toBe(true);
    });

    it('should return true if string is "12.01"', () => {
      expect(isNumber('12.01')).toBe(true);
    });

    it('should return false if string is "12,01"', () => {
      expect(isNumber('12,01')).toBe(false);
    });
  });
});
