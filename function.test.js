//NaN === Nan = false
//0 === -0 = true

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
  describe("When it receives to values equal to NaN", () => {
    test("Then it should return false", () => {
      //ARRANGE
      const a = NaN;
      const b = NaN;
      const expectedReturn = false;

      //ACT

      const equals = strictEquals(a, b);

      //ASSERT
      expect(equals).toBe(expectedReturn);
    });
  });
});
