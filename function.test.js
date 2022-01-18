function strictEquals(a, b) {
  let returnValue = Object.is(a, b);

  if (Number.isNaN(a) && Number.isNaN(b)) {
    returnValue = false;
  }

  if (Object.is(a * -1, 0)) {
    returnValue = true;
  }
  if (Object.is(0, b * -1)) {
    returnValue = true;
  }

  return returnValue;
}

describe("Given a strictEquals function", () => {
  describe("When it receives two values equal to 1", () => {
    test("Then it should return true", () => {
      //ARRANGE
      const a = 1;
      const b = 1;
      const expectedReturn = true;

      //ACT

      const equals = strictEquals(a, b);

      //ASSERT
      expect(equals).toBe(expectedReturn);
    });
  });

  describe("When it receives to values equal to NaN", () => {
    test("Then it should return false", () => {
      const a = NaN;
      const b = NaN;
      const expectedReturn = false;

      const equals = strictEquals(a, b);

      expect(equals).toBe(expectedReturn);
    });
  });

  describe("When it receives to values equal to 0 and -0", () => {
    test("Then it should return true", () => {
      const a = 0;
      const b = -0;
      const expectedReturn = true;

      const equals = strictEquals(a, b);

      expect(equals).toBe(expectedReturn);
    });
  });

  describe("When it receives to values equal to -0 and 0", () => {
    test("Then it should return true", () => {
      const a = -0;
      const b = 0;
      const expectedReturn = true;

      const equals = strictEquals(a, b);

      expect(equals).toBe(expectedReturn);
    });
  });
});
