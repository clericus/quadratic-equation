module.exports = function solveEquation(equation) {
  let str = equation;
  str = str.replace(/\s/g, '');                          //delete spaces
  let arr = str.split('*');                              //divide the string
  let arrNew = [];                                       //new array for digits
  for (let i = 0; i < arr.length; i++) {
    arrNew[i] =arr[i].match(/(^|[^0-9A-zА-яЁё_]{1})([0-9]+)([^0-9A-zА-яЁё_]{1}|$)/gm); //reg for digits
    }
  let a = arrNew[0];                                     //equation koef
  let b = arrNew[1];                                     //equation koef
  let c = arrNew[2];                                     //equation koef
  let disc = b * b - 4 * a * c;                          //discriminant
  let x1;
  let x2;
  if (disc > 0) {
    x1 = Math.round(-b / 2 / a + Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5) / 2 / a);
    x2 = Math.round(-b / 2 / a - Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5) / 2 / a);
    }
  if (disc == 0) {
    x1 = Math.round(-b / (2 * a));
    x2 = Math.round(-b / (2 * a));
    }
  let arrX = [x1, x2];                                    //result array
  return arrX.sort((a, b) => a-b);
}
