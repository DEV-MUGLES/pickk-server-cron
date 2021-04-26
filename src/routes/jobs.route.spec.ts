import { isParamsContainName } from '.';

describe('isParamsContainName', () => {
  it('should success when valid', () => {
    const validInputs = [{ name: 'hi' }, { name: 'hi', age: 26 }];

    validInputs.forEach((input) => {
      expect(isParamsContainName(input)).toEqual(true);
    });
  });

  it('should fail when invalid', () => {
    const invalidInputs = [{ name: null }, { name: 33 }, null, undefined];

    invalidInputs.forEach((input) => {
      expect(isParamsContainName(input)).toEqual(false);
    });
  });
});
