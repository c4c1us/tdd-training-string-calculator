import { add } from '../src/add';

describe('add() function', () => {
  it('should return "0" if param is an empty string', () => {
    expect(add('')).toBe('0');
  });
});
