import { isParamsContainName } from '.';

describe('isParamsContainName', () => {
  it('name:string을 포함한 object면 성공한다.', () => {
    const validInputs = [{ name: 'hi' }, { name: 'hi', age: 26 }];

    validInputs.forEach((input) => {
      expect(isParamsContainName(input)).toEqual(true);
    });
  });

  it('falsy한 값인 경우 실패한다.', () => {
    const invalidInputs = [null, undefined];

    invalidInputs.forEach((input) => {
      expect(isParamsContainName(input)).toEqual(false);
    });
  });

  it('name property가 string이 아닌 경우 실패한다.', () => {
    const invalidInputs = [{ name: null }, { name: 33 }];

    invalidInputs.forEach((input) => {
      expect(isParamsContainName(input)).toEqual(false);
    });
  });
});
