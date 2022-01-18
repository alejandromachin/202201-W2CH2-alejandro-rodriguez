function strictEquals(a, b) {
  let returnValue;
  //evaluar si a es igual b o no
  if (+a / +b === 1) {
    returnValue = true;
  } else {
    returnValue = false;
  }

  return returnValue;
}

let prueba = strictEquals("hola", "hola");

console.log(prueba);
