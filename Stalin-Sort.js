async function StalinSort(arr) {
  let i = 0;
  while(i < arr.length - 1) {
    if (arr[i] > arr[i + 1]) {
        arr.splice(i, 1);
    }
    else{ 
      i++;
    }
  }
  return arr;
}
