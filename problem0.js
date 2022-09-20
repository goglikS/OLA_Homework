let row = 4; 
let col = 5;

const getTable= (row, col) => {
  const arr = [];
  let num = 0;
  while (arr.length !== row ) arr.push([]); 
  for (let c = 0; c < col; c++) {
    if ( !(c % 2) ) {
      for (let r = 0; r < row; r++) arr[r].push(++num);
    }
    else {
      for (let r = row -1; r > -1; r--) arr[r].push(++num);
    }
  }
  return arr;
}

let finalArr = getTable(row, col);
console.log(finalArr);