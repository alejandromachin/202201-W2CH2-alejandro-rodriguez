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
