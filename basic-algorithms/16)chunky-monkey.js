//Chunky Monkey
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    let subArr = arr.slice(i, i + size);
    newArr.push(subArr);
  }

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
