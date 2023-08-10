
// You should implement your task here.

module.exports = function towelSort (matrix) {
  //if (matrix) {return []};
  if (!matrix) {return []};
  let arr1 = [];
  for(let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {arr1.push(matrix[i])}
    if (i % 2 !== 0) {arr1.push(matrix[i].reverse())}
  }
//return arr1;


  let arr2 = [];
  for(let i = 0; i < arr1.length; i++) {
     arr2.push((arr1[i]));
    
  }
  //return arr2;
  let arr3 =[];
  
  for(let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    arr3.push(arr2[i][j]);
  }

  }
  
return arr3;
let arr4 = []
for(let i = 0; i < arr3.length; i++) {
arr4.push(arr3[i].split(',').join(' '))
}
return arr4;

}
