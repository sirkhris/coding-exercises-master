export function MagicSquare(square) {
  let result = false;
  let loop = true;
  let number = 0;
  let numberArr = [];

  // Implement a method that takes a 2D array,
  // checks if it's a magic square and returns either true or false depending on the result.
  // sequence (https://en.wikipedia.org/wiki/Magic_square)

  //The following lines of code are used to gather data into an array.

  //gathering data for each row
  for (let r = 0; r < square.length; r++) {
    number = 0;
    for (let c = 0; c < square[r].length; c++) {
      number += square[r][c];
    }
    numberArr.push(number);
  }

  //gathering data for each column
  for (let c = 0; c < square.length; c++) {
    number = 0;
    for (let r = 0; r < square[c].length; r++) {
      number += square[r][c];
    }
    numberArr.push(number);
  }

  //gathering data for diangonal forward
  while (loop == true) {
    number = 0;
    for (let d = 0; d < square.length; d++) {
      number += square[d][d];
    }
    numberArr.push(number);
    loop = false;
  }
  loop = true;

  //gathering data for diangonal backwards
  number = 0;
  let c = square.length - 1;
  for (let r = 0; r < square.length; r++) {
    if (c > -1) {
      number += square[r][c];
    }
    c--;
  }
  numberArr.push(number);

  /*after gathering the data, it will grab the first element in the array and then
  will commence comparison of other elements in array to see if they match.
  if one of them do not match: return result = false.
  */

  //testing accumuletive results
  number = numberArr[0];
  for (let num of numberArr) {
    if (num != number) return (result = false);
    else result = true;
  }

  return result;
  end;
}
